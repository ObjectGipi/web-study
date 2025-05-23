import { input } from "./library/input";
import { AuthUI } from "./ui/authUI";
import { UserService } from "./service/userService";
import { SignUpUI } from "./ui/signUpUI";

class App {
  private authUI: AuthUI;
  private userService: UserService;
  private signUpUI: SignUpUI;

  public constructor(
    authUI: AuthUI,
    userService: UserService,
    signUpUI: SignUpUI,
  ) {
    this.authUI = authUI;
    this.userService = userService;
    this.signUpUI = signUpUI;
  }

  run = async () => {
    while (true) {
      const answer = await input(
        `로그인 할 시 1을 누르고, 회원가입을 할 시 2를 눌러주세요`,
      );

      // 로그인
      if (answer === "1") {
        const isInputValid = await this.authUI.validateSignInForm(); // boolean

        if (!isInputValid) {
          continue;
        }

        const inputEmail = this.authUI.getEmail();
        const inputPassword = this.authUI.getPassword();
        const isSignedIn = this.userService.signIn(inputEmail, inputPassword);

        if (isSignedIn) {
          process.exit(); // 프로그램 종료
        }

        // 회원가입
      } else if (answer === "2") {
        const isSingUpValid = await this.signUpUI.ValidSignUpForm();

        if (!isSingUpValid) {
          continue;
        }

        const inputEmail = this.signUpUI.getEmail();
        const inputPassword = this.signUpUI.getPassword();
        const inputUserName = this.signUpUI.getUserName();
        const isSignedUp = this.userService.signUp(
          inputEmail,
          inputPassword,
          inputUserName,
        );

        if (isSignedUp) {
          process.exit();
        }
      } else {
        console.log("숫자 1과 2중에서 선택해주십시요.");
      }
    }
  };
}

const authUI = new AuthUI();
const userService = new UserService();
const signUpUI = new SignUpUI();
const app = new App(authUI, userService, signUpUI); // 생성자에서 명명한 파라미터 주입 -> DI가 자동으로 해줌
app.run();