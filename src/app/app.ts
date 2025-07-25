import { input } from "./utils/input";
import { SignInUI } from "./ui/signInUI";
import { UserService } from "./service/userService";
import { SignUpUI } from "./ui/signUpUI";

class App {
  private signUpUI: SignUpUI;
  private signInUI: SignInUI;
  private userService: UserService;

  public constructor(
    signUpUI: SignUpUI,
    signInUI: SignInUI,
    userService: UserService,
  ) {
    this.signUpUI = signUpUI;
    this.signInUI = signInUI;
    this.userService = userService;
  }

  run = async () => {
    while (true) {
      const answer: string = await input(
        `서비스를 숫자로 선택해주세요.\n회원가입: 1\n로그인: 2\n`,
      );

      if (answer === `1`) {
        const isSignValidate = await this.signUpUI.validateSignUpForm();

        if (!isSignValidate) {
          continue;
        }

        const inputEmail = this.signUpUI.getEmail();
        const inputPassword = this.signUpUI.getPassword();
        const inputUserName = this.signUpUI.getUserName();
        const isSignedUp = await this.userService.signUp(
          inputEmail,
          inputPassword,
          inputUserName,
        );

        if (!isSignedUp) {
          console.log(`중복되는 email이 있습니다.`);
        } else {
          console.log(`회원가입이 완료되었습니다.\nemail: ${inputEmail}\nusername: ${inputUserName}`,);
        }
      }

      if (answer === `2`) {
        const isInputValid = await this.signInUI.validateSignInForm();

        if (!isInputValid) {
          continue;
        }

        const inputEmail = this.signInUI.getEmail();
        const inputPassword = this.signInUI.getPassword();
        const isSignedIn = await this.userService.signIn(inputEmail, inputPassword);

        if (!isSignedIn) {
          console.log(`로그인 실패.. email이나 password를 확인해주세요.`);
        } else {
          console.log(`로그인 성공!! 환영합니다`);
        }
      }
    }
  };
}

const signUpUI = new SignUpUI();
const signInUI = new SignInUI();
const userService = new UserService();
const app = new App(signUpUI, signInUI, userService);
app.run();
