import { AuthScreen } from "./view/screens/authScreen";

export class App {
  private authScreen: AuthScreen;

  public constructor(authScreen: AuthScreen) {
    this.authScreen = authScreen;
  }

  run = async () => {
    while (true) {
      const choice = await this.authScreen.select();
      if (choice === 1) {
        await this.authScreen.signIn();
      } else if (choice === 2) {
        await this.authScreen.signUp();
      } else {
        console.log("숫자 1과 2중에서 선택해주십시요.");
      }
    }
  };
}
