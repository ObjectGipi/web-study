import fs from "node:fs";
import * as util from "node:util";

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

export class UserService {
  public signUp =  async (email: string, password: string, userName: string) => {
    const usersText = await readFileAsync(`users.txt`);
    const usersArray = usersText.toString().split(`\n`);
    for (let i: number = 0; i < usersArray.length; i = i + 1) {
      const [userEmail] = usersArray[i].split(`, `);
      if (email === userEmail) {
        return false;
      }
    }
    await appendFileAsync(`users.txt`, `${email}, ${password}, ${userName}\n`);
    return true;
  };

  public signIn = async (email: string, password: string) => {
    const usersText = await readFileAsync(`users.txt`);
    const usersArray = usersText.toString().split(`\n`);
    for (let i: number = 0; i < usersArray.length; i = i + 1) {
      const [userEmail, existPassword]: string[] = usersArray[i].split(`, `);
      if (email === userEmail && password === existPassword) {
        return true;
      }
    }
    return false;
  };
}
