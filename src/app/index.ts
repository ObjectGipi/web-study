import {UserRepository} from "./repository/userRepository";
import {SignInUI} from "./view/signInUI";
import {UserService} from "./service/userService";
import {SignUpUI} from "./view/signUpUI";
import {App} from "./app";

// DI
const userRepository = new UserRepository();
const signInUI = new SignInUI();
const userService = new UserService(userRepository);
const signUpUI = new SignUpUI();
const app = new App(signInUI, signUpUI, userService);

app.run();