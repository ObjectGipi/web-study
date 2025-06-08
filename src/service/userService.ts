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
    const existEmail = await this.userRepository.existEmail(email)
    if (!existEmail) {
      return null;
    }

    // DB 저장
    const saveUsers = await this.userRepository.saveUsers(email, password, userName)
    return new UserDTO(saveUsers);
    // 여기서도 return을 userDTO말고 email, password를 변수에 담아서 준 뒤에,
    // app.ts에서 유저에게 콘솔에 출력해주면 되는 것 아닌가요?
    // 혹시 입력값에 변경이 생기면 야근 대파티가 되기때문에 형식을 딱 DTO로 정해놓는건가요?
  };
}
