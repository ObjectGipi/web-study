import { input } from "./library/input";
import * as fs from "node:fs";
import { AuthUI } from "./ui/authUI";
import { UserService } from "./service/userService";

class App {
  private authUI: AuthUI;
  private userService: UserService;

  public constructor(authUI: AuthUI, userService: UserService) {
    this.authUI = authUI;
    this.userService = userService;
  }

  run = async () => {
    while (true) {
      const answer = await input(
        `로그인 할 시 1을 누르고, 회원가입을 할 시 2를 눌러주세요`,
      );
      if (answer === "1") {
        const isInputValid = await this.authUI.validateSignInForm(); // boolean

        if (!isInputValid) {
          continue;
        }

        const inputEmail = this.authUI.getEmail()
        const inputPassword = this.authUI.getPassword()
        const isSignedIn = this.userService.signIn(inputEmail, inputPassword);

        if (isSignedIn) {
          process.exit()
        }

      } else if (answer === "2") {
        const email = await input(`이메일을 입력하세요: `);
        if (!email.includes("@")) {
          console.log(`잘못된 입력입니다. 이메일에 @를 포함시켜주세요.`);
          continue;
        }

        const password = await input(`비밀번호를 입력하세요: `);
        if (password.length < 4) {
          console.log(`잘못된 입력입니다. 비밀번호는 4자리이상 입력해주세요.`);
          continue;
        }

        const usersText = fs.readFileSync("users.txt").toString();
        const usersArray = usersText.split("\n");

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
        console.log(
          `회원가입에 성공했어요! email: ${email}, password: ${password}, 닉네임: ${userName}`,
        );
      } else {
        console.log("숫자 1과 2중에서 선택해주십시요.");
      }
    }
  };
}

const authUI = new AuthUI();
const userService = new UserService();
const app = new App(authUI, userService); // 생성자에서 명명한 파라미터 주입 -> DI가 자동으로 해줌
app.run();

// 과제: 회원가입 부분 코드분업화 (필요한 메서드나 클래스 생성 자유)