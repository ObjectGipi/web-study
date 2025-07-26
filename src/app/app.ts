import { input } from "./utils/input";
import { SignInUI } from "./ui/signInUI";
import { UserService } from "./service/userService";
import { SignUpUI } from "./ui/signUpUI";
import { UserRepository } from "./repository/userRepository";

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
        await this.userService.signUp(
          inputEmail,
          inputPassword,
          inputUserName,
        );
      }

      if (answer === `2`) {
        const isInputValid = await this.signInUI.validateSignInForm();

        if (!isInputValid) {
          continue;
        }

        const inputEmail = this.signInUI.getEmail();
        const inputPassword = this.signInUI.getPassword();
        const userDTO = await this.userService.signIn(inputEmail, inputPassword);

        if (userDTO) {
          console.log(`로그인 성공! 환영합니다. ${userDTO.userName}님`);
        } else {
          console.log(`로그인 실패. email & password를 확인해주세요.`);
        }
      }
    }
  };
}

const signUpUI = new SignUpUI();
const signInUI = new SignInUI();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const app = new App(signUpUI, signInUI, userService);
app.run();
