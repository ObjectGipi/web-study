import { input } from "./utils/input";
import * as fs from "node:fs";

const app = async () => {
  while (true) {
    const answer: string = await input(
      `서비스를 숫자로 선택해주세요.\n회원가입: 1\n로그인: 2\n`,
    );
    if (answer === `1`) {
      const email: string = await input(`email: `);
      const password: string = await input(`password: `);
      const userName: string = await input(`nickname: `);
      const user: string = `${email}, ${password}, ${userName}\n`;
      fs.appendFileSync(`users.txt`, user);
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
        const user: string[] = allUsers[i].split(`,`);
        if (email === user[0] && password === user[1].trim()) {
          loginSuccess = true;
          userName = user[2].trim();
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
