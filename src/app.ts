import { input } from "./library/input";
import * as fs from "node:fs";

const app = async () => {
  while (true) {
    const answer = await input(
      `로그인 할 시 1을 누르고, 회원가입을 할 시 2를 눌러주세요`,
    );
    if (answer === "1") {
      const email = await input(`이메일: `);
      const password = await input(`비밀번호: `);
      const content = fs.readFileSync("users.txt").toString();
      console.log(content.split("\n"));
    } else if (answer === "2") {
      const email = await input(`이메일: `);
      const password = await input(`비밀번호: `);
      const userName = await input(`닉네임: `);
      fs.appendFileSync("users.txt", `${email}, ${password}, ${userName}\n`);
    } else {
      console.log("잘못된 입력입니다.");
    }
  }
};

app();