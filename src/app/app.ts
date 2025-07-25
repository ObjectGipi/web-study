import { input } from "./utils/input";
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
      const answer: string = await input(
        `서비스를 숫자로 선택해주세요.\n회원가입: 1\n로그인: 2\n`,
      );

      if (answer === `1`) {
        const isSignUp = await this.authUI.validateSignUpForm();

        if (!isSignUp) {
          continue;
        }

        const inputEmail = this.authUI.getEmail();
        const inputPassword = this.authUI.getPassword();
        const inputUserName = this.authUI.getUserName();

        const usersText: string = fs.readFileSync(`users.txt`).toString();
        const usersArray: string[] = usersText.split(`\n`);
        let isDuplicate: boolean = false;
        for (let i: number = 0; i < usersArray.length; i = i + 1) {
          const [existEmail]: string[] = usersArray[i].split(`, `);
          if (inputEmail === existEmail) {
            console.log(inputEmail);
            isDuplicate = true;
          }
        }
        if (isDuplicate) {
          console.log(`중복되는 email이 있습니다.`);
          continue;
        }

        fs.appendFileSync(
          `users.txt`,
          `${inputEmail}, ${inputPassword}, ${inputUserName}\n`,
        );
        console.log(
          `회원가입이 완료되었습니다.\nemail: ${inputEmail}\nusername: ${inputUserName}`,
        );
        break;
      }

      if (answer === `2`) {
        const isInputValid = await this.authUI.validateSignInForm();

        if (!isInputValid) {
          continue;
        }

        const inputEmail = this.authUI.getEmail();
        const inputPassword = this.authUI.getPassword();

        const isCorrectUser = this.userService.signIn(
          inputEmail,
          inputPassword,
        );

        if (isCorrectUser) {
          console.log(`로그인 성공!! 환영합니다`);
          process.exit();
        } else {
          console.log(`로그인 실패.. email이나 password를 확인해주세요.`);
        }
      }
    }
  };
}
const authUI = new AuthUI();
const userService = new UserService();
const app = new App(authUI, userService);
app.run();
