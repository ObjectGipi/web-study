import fs from "node:fs";

export class UserService {
  public signUp = () => {

  }

  public signIn = (email: string, password: string) => {
    const fileData: string = fs.readFileSync(`users.txt`).toString();
    const allUsers: string[] = fileData.split(`\n`);
    for (let i: number = 0; i < allUsers.length; i = i + 1) {
      const [existEmail, existPassword]: string[] = allUsers[i].split(`, `);
      if (email === existEmail && password === existPassword) {
        return true;
      }
    }
    return false;
  };
}
