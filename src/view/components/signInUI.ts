import { input } from "../../utils/input";

export class SignInUI {
  private email: string;
  private password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }

  validateSignInForm = async () => {
    this.email = await input(`이메일을 입력하세요: `);
    if (!this.email.includes("@")) {
      console.log(`잘못된 입력입니다. 이메일에 @를 포함시켜주세요.`);
      this.email = "";
      return false;
    }

    this.password = await input(`비밀번호를 입력하세요: `);
    if (this.password.length < 4) {
      console.log(`잘못된 입력입니다. 비밀번호는 4자리이상 입력해주세요.`);
      this.email = "";
      this.password = "";
      return false;
    }
    return true;
  };

  getEmail = () => {
    return this.email;
  };

  getPassword = () => {
    return this.password;
  };
}
