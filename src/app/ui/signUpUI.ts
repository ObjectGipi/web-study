import { input } from "../utils/input";

export class SignUpUI {
  private email: string;
  private password: string;
  private userName: string;

  constructor() {
    this.email = ``;
    this.password = ``;
    this.userName = ``;
  }

  public validateSignUpForm = async () => {
    this.email = await input(`email: `);
    let isCorrectEmail: boolean = false;
    for (let i: number = 0; i < this.email.length; i = i + 1) {
      if (this.email[i] === `@`) {
        isCorrectEmail = true;
        break;
      }
    }
    if (!isCorrectEmail) {
      console.log(`email은 @를 포함해야 합니다.`);
      this.email = ``;
      this.password = ``;
      this.userName = ``;
      return false;
    }

    this.password = await input(`password: `);
    if (this.password.length < 4) {
      console.log(`password는 4자리 이상이어야 합니다.`);
      this.email = ``;
      this.password = ``;
      this.userName = ``;
      return false;
    }

    this.userName = await input(`userName: `);
    let isCorrectUserName: boolean = true;
    for (let i: number = 0; i < this.userName.length; i = i + 1) {
      const char: number = this.userName[i].charCodeAt(0);
      if (char < `a`.charCodeAt(0) || char > "z".charCodeAt(0)) {
        isCorrectUserName = false;
        break;
      }
    }
    if (!isCorrectUserName) {
      console.log(`userName은 영어 소문자로만 작성해야합니다.`);
      this.email = ``;
      this.password = ``;
      this.userName = ``;
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

  public getUserName = () => {
    return this.userName;
  };
}
