import { input } from "./utils/input";
import * as fs from "node:fs";

const app = async () => {
  while (true) {
    const answer: string = await input(
      `서비스를 숫자로 선택해주세요.\n회원가입: 1\n로그인: 2\n`,
    );
    if (answer === `1`) {
      const email: string = await input(`email: `);
      let isCorrectEmail: boolean = false;
      for (let i: number = 0; i < email.length; i = i + 1) {
        if (email[i] === `@`) {
          isCorrectEmail = true;
          break;
        }
      }
      if (!isCorrectEmail) {
        console.log(`email은 @를 포함해야 합니다.`)
        continue;
      }

      const password: string = await input(`password: `);
      if (password.length < 4) {
        console.log(`password는 4자리 이상이어야 합니다.`);
        continue;
      }

      const userName: string = await input(`nickname: `);
      let isCorrectUserName: boolean = true;
      for (let i: number = 0; i < userName.length; i = i + 1) {
        const char = userName[i].charCodeAt(0)
        if (char < `a`.charCodeAt(0) || char > 'z'.charCodeAt(0)) {
          isCorrectUserName = false;
          break;
        }
      }
      if (!isCorrectUserName) {
        console.log(`userName은 영어 소문자로만 작성해야합니다.`)
        continue;
      }

      const fileData: string = fs.readFileSync(`users.txt`).toString();
      const allUsers: string[] = fileData.split(`\n`);
      let isDuplicate: boolean = true;
      for (let i: number = 0; i < allUsers.length; i = i + 1) {
        const existUser: string[] = allUsers[i].split(`, `);
        if (email === existUser[0]) {
          isDuplicate = false;
        }
      }
      if (!isDuplicate) {
        console.log(`중복되는 email이 있습니다.`)
        continue;
      }

      fs.appendFileSync(`users.txt`, `${email}, ${password}, ${userName}\n`);
      console.log(
        `회원가입이 완료되었습니다.\nemail: ${email}\nnickname: ${userName}`,
      );
      break;
    }

    if (answer === `2`) {
      const email: string = await input(`email: `);
      const password: string = await input(`password: `);
      let userName: string = ``;
      let loginSuccess: boolean = false;
      const fileData: string = fs.readFileSync(`users.txt`).toString();
      const allUsers: string[] = fileData.split(`\n`);

      for (let i: number = 0; i < allUsers.length; i = i + 1) {
        const user: string[] = allUsers[i].split(`, `);
        if (email === user[0] && password === user[1]) {
          loginSuccess = true;
          userName = user[2];
          break;
        }
      }

      if(loginSuccess) {
        console.log(`로그인 성공!! 환영합니다 ${userName}님`)
      } else {
        console.log(`로그인 실패.. 아이디나 비밀번호를 확인해주세요.`)
      }
    }
  }
};

app();
