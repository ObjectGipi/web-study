import { input } from "./library/input";
import * as fs from "node:fs";

const app = async () => {
  while (true) {
    const answer = await input(
      `로그인 할 시 1을 누르고, 회원가입을 할 시 2를 눌러주세요`,
    );
    if (answer === "1") {
      const email = await input(`이메일을 입력하세요: `);
      if (!email.includes("@")) {
        console.log(`잘못된 입력입니다. 이메일에 @를 포함시켜주세요.`)
        continue;
      }

      const password = await input(`비밀번호를 입력하세요: `);
      if (password.length < 4) {
        console.log(`잘못된 입력입니다. 비밀번호는 4자리이상 입력해주세요.`);
        continue;
      }

      const usersText = fs.readFileSync("users.txt").toString();
      const usersArray = usersText.split("\n");

      for (let i = 0; i < usersArray.length; i++) {
        const [userEmail, userPassword, userNickname] = usersArray[i].split(", ");
        if (userEmail === email && userPassword === password) {
          console.log(`로그인에 성공했어요! 닉네임: ${userNickname}`);
        }
      }

      console.log(`이메일이 존재하지 않거나, 잘못된 비밀번호 입니다.`);
    } else if (answer === "2") {
      const email = await input(`이메일을 입력하세요: `);
      if (!email.includes("@")) {
        console.log(`잘못된 입력입니다. 이메일에 @를 포함시켜주세요.`)
        continue;
      }

      const password = await input(`비밀번호를 입력하세요: `);
      if (password.length < 4) {
        console.log(`잘못된 입력입니다. 비밀번호는 4자리이상 입력해주세요.`);
        continue;
      }

      const usersText = fs.readFileSync("users.txt").toString();
      const usersArray = usersText.split("\n")

      let isFoundEmail = false;

      for (let i = 0; i < usersArray.length; i++) {
        const userEmail = usersArray[i].split(", ")[0];
        if (userEmail === email) {
          console.log("중복되는 이메일이 있습니다.");
          isFoundEmail = true;
          break;
        }
      }

      if (isFoundEmail) {
        continue;
      }

      const userName = await input(`닉네임: `);
      fs.appendFileSync("users.txt", `${email}, ${password}, ${userName}\n`);
      console.log(`회원가입에 성공했어요! email: ${email}, password: ${password}, 닉네임: ${userName}`);
    } else {
      console.log("숫자 1과 2중에서 선택해주십시요.")
    }
  }
};

app();
