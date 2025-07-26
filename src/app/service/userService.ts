import fs from "node:fs";
import * as util from "node:util";
import { UserRepository } from "../repository/userRepository";
import { UserDTO } from "../dto/userDTO";

const appendFileAsync = util.promisify(fs.appendFile);

export class UserService {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public signUp = async (
    inputEmail: string,
    inputPassword: string,
    inputUserName: string,
  ) => {
    const findUserByEmail = await this.userRepository.findUserByEmail(inputEmail);
    if (!findUserByEmail) {
      console.log(`중복되는 email이 있습니다.`);
      return false;
    } else {
    await appendFileAsync(
      `users.txt`,
      `${inputEmail}, ${inputPassword}, ${inputUserName}\n`,
    );
      console.log(`회원가입이 완료되었습니다.\nemail: ${inputEmail}\nusername: ${inputUserName}`,);
    return true;
    }
  };

  public signIn = async (inputEmail: string, inputPassword: string) => {
    const userEntity = await this.userRepository.getUsers();
    for (let i: number = 0; i < userEntity.length; i = i + 1) {
      if (userEntity[i].email === inputEmail && userEntity[i].password === inputPassword) {
        return new UserDTO(userEntity[i]);
      }
    }
    return null;
  };
}
