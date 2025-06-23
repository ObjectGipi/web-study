import { UserRepository } from "../repository/userRepository";
import { UserDTO } from "../dto/userDTO";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public signIn = async (email: string, password: string) => {
    const users = await this.userRepository.getUsers();
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        return new UserDTO(users[i]);
      }
    }
    return null;
  };

  public signUp = async (email: string, password: string, userName: string) => {

    // 중복 검사
    const existEmail = await this.userRepository.findUserByEmail(email)
    if (!existEmail) {
      console.log("중복되는 이메일이 있습니다.");
      return null;
    }

    // DB 저장
    const saveUsers = await this.userRepository.saveUsers(email, password, userName)
    return new UserDTO(saveUsers);
  };
}
