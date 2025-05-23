import { input } from "../library/input";
import fs from "node:fs";

export class SignUpUI {
  private email: string;
  private password: string;
  private userName: string;

  constructor() {
    this.email = "";
    this.password = "";
    this.userName = "";
  }

  public ValidSignUpForm = async () => {
    // 이메일 입력 + 형식 검증
    this.email = await input(`이메일을 입력하세요: `);
    if (!this.email.includes("@")) {
      console.log(`잘못된 입력입니다. 이메일에 @를 포함시켜주세요.`);
      return false;
    }

    // 이메일 중복 검증
    const usersText = fs.readFileSync("users.txt").toString();
    const usersArray = usersText.split("\n");
    // let isFoundEmail = false; -> 굳이 필요 없지 않나?
    for (let i = 0; i < usersArray.length; i++) {
      const userEmail = usersArray[i].split(", ")[0];
      if (userEmail === this.email) {
        console.log("중복되는 이메일이 있습니다.");
        return false;
      }
    }

    // 비밀번호 입력 + 형식 검증
    this.password = await input(`비밀번호를 입력하세요: `);
    if (this.password.length < 4) {
      console.log(`잘못된 입력입니다. 비밀번호는 4자리이상 입력해주세요.`);
      return false;
    }

    // 유저네임 입력
    this.userName = await input(`닉네임: `);
    return true;
  };

  getEmail = () => {
    return this.email;
  };

  getPassword = () => {
    return this.password;
  };

  getUserName = () => {
    return this.userName;
  };
}
