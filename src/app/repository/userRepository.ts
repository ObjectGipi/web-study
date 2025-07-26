import util from "node:util";
import fs from "node:fs";
import { UserEntity } from "../entity/userEntity";

const readFileAsync = util.promisify(fs.readFile);

export class UserRepository {
  public getUsers = async () => {
    const usersBuffer = await readFileAsync(`users.txt`);
    const usersArray = usersBuffer.toString().split(`\n`);
    const users = [];
    for (let i: number = 0; i < usersArray.length; i = i + 1) {
      const [userEmail, userPassword, userName] = usersArray[i].split(`, `);
      const userEntity = new UserEntity(userEmail, userPassword, userName);
      users.push(userEntity);
    }
    return users;
  };

  // 이 메서드에서는 email만 있으면 되는데 entity에 담으려면,
  // [이메일, 비밀번호, 유저네임]까지 담아야해서 어쩔 수 없이 담았는데,
  // 이렇게 해도 되는건지?
  public findUserByEmail = async (inputEmail: string) => {
    const usersBuffer = await readFileAsync(`users.txt`);
    const usersArray = usersBuffer.toString().split(`\n`);
    for (let i: number = 0; i < usersArray.length; i = i + 1) {
      const [userEmail, userPassword, userName] = usersArray[i].split(`, `);
      const userEntity = new UserEntity(userEmail, userPassword, userName);
      if (userEntity.email === inputEmail) {
        return false;
      }
    }
    return true;
  }
}
