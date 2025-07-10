import { UserEntity } from "../entity/userEntity";
import {INewDatabase, IOldDatabase} from "./IOldDatabase";

export class UserRepository {
  private database: IOldDatabase & INewDatabase;

  constructor(database: IOldDatabase & INewDatabase) {
    this.database = database;
  }

  public getUsers = async () => {
    this.database.convertToCSV("users.txt");
    const usersArray = await this.database.read("users.csv");
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

  public createUser = async (
    email: string,
    password: string,
    userName: string,
  ) => {
    await this.database.write(
      "users.txt",
      `${email}, ${password}, ${userName}\n`,
    );
    return new UserEntity(email, password, userName);
  };
}
