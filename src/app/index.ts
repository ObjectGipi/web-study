import { UserRepository } from "./repository/userRepository";
import { SignInUI } from "./view/components/signInUI";
import { UserService } from "./service/userService";
import { SignUpUI } from "./view/components/signUpUI";
import { App } from "./app";
import { AuthScreen } from "./view/screens/authScreen";
import { TxtDatabase } from "./database/txtDatabase";
import { CSVDatabase } from "./database/csvDatabase";

// const csvDatabase = new CSVDatabase();
const txtDatabase = new TxtDatabase();
const userRepository = new UserRepository(txtDatabase);
const signInUI = new SignInUI();
const userService = new UserService(userRepository);
const signUpUI = new SignUpUI();
const authScreen = new AuthScreen(signInUI, signUpUI, userService);
const app = new App(authScreen);

app.run();
