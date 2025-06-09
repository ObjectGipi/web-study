import { SignInUI } from "../components/signInUI";
import { SignUpUI } from "../components/signUpUI";
import { UserService } from "../../service/userService";
import { input } from "../../utils/input";

export class AuthScreen {
  private signInUI: SignInUI;
  private signUpUI: SignUpUI;
  private userService: UserService;

  public constructor(
    signInUI: SignInUI,
    signUpUI: SignUpUI,
    userService: UserService,
  ) {
    this.signInUI = signInUI;
    this.signUpUI = signUpUI;
    this.userService = userService;
  }

  select = async (): Promise<number> => {
    return parseInt(
      await input(`로그인 할 시 1을 누르고, 회원가입을 할 시 2를 눌러주세요`),
    );
  };
  signIn = async () => {
    const isInputValid = await this.signInUI.validateSignInForm();
    if (!isInputValid) {
      return;
    }

    const inputEmail = this.signInUI.getEmail();
    const inputPassword = this.signInUI.getPassword();
    const user = await this.userService.signIn(inputEmail, inputPassword);
    if (user) {
      console.log(`로그인에 성공했어요!\n닉네임: ${user.userName}`);
      process.exit();
    } else {
      console.log(`이메일이 존재하지 않거나, 잘못된 비밀번호 입니다.`);
    }
  };
  signUp = async () => {
    const isSingUpValid = await this.signUpUI.ValidSignUpForm();
    if (!isSingUpValid) {
      return;
    }

    const inputEmail = this.signUpUI.getEmail();
    const inputPassword = this.signUpUI.getPassword();
    const inputUserName = this.signUpUI.getUserName();
    const saveUser = await this.userService.signUp(
      inputEmail,
      inputPassword,
      inputUserName,
    );
    if (saveUser) {
      console.log(
        `회원가입을 성공했어요!\n이메일: ${saveUser.email}\n닉네임: ${saveUser.userName}`,
      );
    }
  };
}
