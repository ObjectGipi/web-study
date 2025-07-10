import { input } from "./utils/input";
import * as fs from "node:fs";

const run = async () => {
  while(true) {
    const answer: string = await input(
      `로그인: 1, 회원가입: 2`
    )

    // 로그인
    if(answer === `1`) {
      const email: string = await input(`아이디를 입력하세요: `);
      const password: string = await input(`비밀번호를 입력하세요: `);

      const usersTxtData: string = fs.readFileSync(`users.txt`, "utf8").trim();
      const lines: string[] = usersTxtData.split(`\n`);
      console.log(lines.length);

      for (let i: number = 0; i < lines.length; i = i + 1) {
        const parts: string[] = lines[i].split(`, `);

        const savedEmail: string = parts[i];
        const savedPassword: string = parts[1];
        const nickName: string = parts[2];

        if(email === savedEmail && password === savedPassword) {
          console.log(`로그인 성공입니다. ${nickName}님`);
        }
      }
    }

    // 회원가입
    if(answer === `2`) {
      const email: string = await input(`아이디를 입력하세요: `)
      const password: string = await input(`비밀번호를 입력하세요: `)
      const nickname: string = await input(`닉네임을 입력하세요: `)

      // users.txt에 추가하는 코드
      fs.appendFileSync(`users.txt`, `${email}, ${password}, ${nickname}\n`);
    }
  }
};

run();
