import { input } from "./library/input";
import * as fs from "node:fs";

const app = async () => {
  while (true) {
    const answer = await input(
      `로그인 할 시 1을 누르고, 회원가입을 할 시 2를 눌러주세요`,
    );
    if (answer === "1") {
      const email = await input(`이메일: `);
      if (!email.includes("@")) {
        console.log(`잘못된 입력입니다. 이메일에 @를 포함시켜주세요.`)
        continue;
      }

      const password = await input(`비밀번호: `);
      if (password.length < 4) {
        console.log(`잘못된 입력입니다. 비밀번호는 4자리이상 입력해주세요.`);
        continue;
      }

      const usersTxt = fs.readFileSync("users.txt").toString();
      const usersArray = usersTxt.split("\n");
      const isExists = usersArray.find((line, idx, arr) => {
        const [existEmail, correctPassword] = line.split(",")
        return existEmail.trim() === email && correctPassword.trim() === password;
      });

      if (isExists !== undefined) {
        const userName = isExists.split(",")[2]
        console.log(`로그인에 성공했어요! 닉네임: ${userName}`);
      } else {
        console.log(`이메일이 존재하지 않거나, 잘못된 비밀번호 입니다.`)
        continue;
      }

    } else if (answer === "2") {
      const email = await input(`이메일: `);
      if (!email.includes("@")) {
        console.log(`잘못된 입력입니다. 이메일에 @를 포함시켜주세요.`);
        continue;
      }

      const usersTxt = fs.readFileSync("users.txt").toString();
      const usersArray = usersTxt.split("\n")
      const isDuplicate =
          usersArray.some((line, idx, arr) => {
            const [savedEmail] = line.split(",")
            return savedEmail === email;
            // console.log("element(line): ", line) // 비교하는 배열의 원소 1개
            // console.log("index(idx): ", idx); // 그 원소의 인덱스
            // console.log("array(arr): ", arr); // 비교하는 배열 전체
          });

      if (isDuplicate) {
        console.log("중복되는 이메일이 있습니다.")
        continue;
      }

      // console.log(usersTxt); // txt 파일을 그대로 반환
      // console.log(usersArray); // txt 파일의 내용을 separator 기준으로 잘라 배열로 반환
      // console.log(isDuplicate); // 겹치는 이메일이 있으면 true, 그렇지 않으면 false

      const password = await input(`비밀번호: `);
      if (password.length < 4) {
        console.log(`잘못된 입력입니다. 비밀번호는 4자리이상 입력해주세요.`);
        continue;
      }

      const userName = await input(`닉네임: `);
      fs.appendFileSync("users.txt", `${email}, ${password}, ${userName}\n`);
      console.log(`회원가입에 성공했어요! email: ${email}, password: ${password}, 닉네임: ${userName}`);
    }

    if (answer !== "1" && answer !== "2") {
      console.log("숫자 1과 2중에서 선택해주십시요.")
      continue;
    }
  }
};

app();
