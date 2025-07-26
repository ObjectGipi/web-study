import { input } from "../utils/input";

export class SignInUI {
  private email: string;
  private password: string;

  constructor() {
    this.email = ``;
    this.password = ``;
  }

  public validateSignInForm = async () => {
    this.email = await input(`email: `);
    this.password = await input(`password: `);
    let isCorrectEmail: boolean = false;
    for (let i: number = 0; i < this.email.length; i = i + 1) {
      if (this.email[i] === `@`) {
        isCorrectEmail = true;
      }
    }
    if (!isCorrectEmail) {
      console.log(`email은 @를 포함해야 합니다.`);
      this.email = ``;
      this.password = ``;
      return false;
    }

    if (this.password.length < 4) {
      console.log(`password는 4자리 이상이어야 합니다.`);
      this.email = ``;
      this.password = ``;
      return false;
    }
    return true;
  };

  public getEmail = () => {
    return this.email;
  };

  public getPassword = () => {
    return this.password;
  };
}
