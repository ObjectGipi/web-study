import {input} from "./utils/input";
import {AuthScreen} from "./view/screens/authScreen";

export class App {
  private autoScreen: AuthScreen;

  public constructor(
    autoScreen: AuthScreen
  ) {
    this.autoScreen = autoScreen;
  }

  run = async () => {
    while (true) {
      const choice = this.autoScreen.select();

      // 로그인
      if (choice === 1) {

      // 회원가입
      } else if (choice === 2) {

      } else {
        console.log("숫자 1과 2중에서 선택해주십시요.");
      }
    }
  };
}