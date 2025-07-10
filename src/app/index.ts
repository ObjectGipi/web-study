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

// 과제
// 1. csv database 내부 코드 작성해보기(convertToCSV는 제외)

// 2. 오늘 배운 상속, 인터페이스 분리의 원칙 복습해보기

// 3. 로그인 후, [1] 메모 작성, [2] 메모 불러오기, [3] 로그아웃 메뉴가 등장
// 1을 고른 경우, 메모를 쓰고, 엔터를 치면, 저장이 되고 다시 메뉴 등장
// 2를 누른 경우, 내가 작성한 모든 메모가 불러와져서 출력되고 다시 메뉴 등장
// 3을 누른 경우 다시 인증 화면으로 돌아감