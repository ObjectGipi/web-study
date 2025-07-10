import { UserRepository } from "./repository/userRepository";
import { SignInUI } from "./view/components/signInUI";
import { UserService } from "./service/userService";
import { SignUpUI } from "./view/components/signUpUI";
import { App } from "./app";
import { AuthScreen } from "./view/screens/authScreen";
import { TxtDatabase } from "./database/txtDatabase";
import { CSVDatabase } from "./database/csvDatabase";

const csvDatabase = new CSVDatabase();
// const txtDatabase = new TxtDatabase();
const userRepository = new UserRepository(csvDatabase);
const signInUI = new SignInUI();
const userService = new UserService(userRepository);
const signUpUI = new SignUpUI();
const authScreen = new AuthScreen(signInUI, signUpUI, userService);
const app = new App(authScreen);

app.run();

// 객체 지향 프로그래밍

// 객체 지향의 4대 특징
// 1. 캡슐화: private, public, protected
// 2. 추상화
// 3. 상속
// 4. 다형성

// 객체 지향의 5대 원칙
// 1. 단일 책임의 원칙
// 2. 개방 폐쇄의 원칙
// 3. 의존성 역전의 원칙
// 4. 인터페이스 분리의 원칙
// 5. 리스코프 치환의 원칙