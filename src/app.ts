import { input } from "./library/input";
import { SignInUI } from "./ui/signInUI";
import { UserService } from "./service/userService";
import { SignUpUI } from "./ui/signUpUI";
import { UserRepository } from "./repository/userRepository";

class App {
  private signInUI: SignInUI;
  private userService: UserService;
  private signUpUI: SignUpUI;

  public constructor(
    signInUI: SignInUI,
    userService: UserService,
    signUpUI: SignUpUI,
  ) {
    this.signInUI = signInUI;
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
        const isInputValid = await this.signInUI.validateSignInForm();

        if (!isInputValid) {
          continue;
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

        // 회원가입
      } else if (answer === "2") {
        const isSingUpValid = await this.signUpUI.ValidSignUpForm();

        if (!isSingUpValid) {
          continue;
        }

        const inputEmail = this.signUpUI.getEmail();
        const inputPassword = this.signUpUI.getPassword();
        const inputUserName = this.signUpUI.getUserName();
        const saveUser = await this.userService.signUp(inputEmail, inputPassword, inputUserName)
        if (saveUser) {
          console.log(`회원가입을 성공했어요!\n이메일: ${saveUser.email}\n닉네임: ${saveUser.userName}`)
        }
      } else {
        console.log("숫자 1과 2중에서 선택해주십시요.");
      }
    }
  };
}

const userRepository = new UserRepository();
const signInUI = new SignInUI();
const userService = new UserService(userRepository);
const signUpUI = new SignUpUI();
const app = new App(signInUI, userService, signUpUI);
app.run();

// 선생님께 설명할때를 대비한 흐름 메모
  // 회원가입시 유저에게 입력값 받음(이메일, 비밀번호, 유저네임)
  // 형식 검사
  // 통과시, userService.signUp 메서드 사용
  // signUp 메서드 내에서 userRepository.existEmail & userRepository.saveUsers 메서드 사용해서 중복검사 및 저장
  // 이후, 저장한 값을 담은 Entity 반환
  // 반환받은 Entity 값을 사용해서 userService.signU은 DTO를 반환
  // app.ts -> 컨트롤러의 역할로서 받은 DTO에서 값을 뽑아내 유저에게 출력
