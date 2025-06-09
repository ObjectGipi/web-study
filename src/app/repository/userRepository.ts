import util from "node:util";
import fs from "node:fs";
import { UserEntity } from "../entity/userEntity";

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

export class UserRepository {
  public getUsers = async () => {
    const usersBuffer = await readFileAsync("users.txt");
    const usersArray = usersBuffer.toString().split("\n");
    const users = [];
    for (let i = 0; i < usersArray.length; i++) {
      const [userEmail, userPassword, userNickname] = usersArray[i].split(", ");
      const userEntity = new UserEntity(userEmail, userPassword, userNickname);
      users.push(userEntity);
    }
    return users;
  };

  public findUserByEmail = async (email: string) => {
    const users = await this.getUsers();
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        return false;
      }
    }
    return true;
  };

  public saveUsers = async (
    email: string,
    password: string,
    userName: string,
  ) => {
    await appendFileAsync("users.txt", `${email}, ${password}, ${userName}\n`);
    return new UserEntity(email, password, userName);
  };
}
