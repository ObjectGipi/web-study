import fs from "node:fs";

export class UserService {
  public signIn = (email: string, password: string) => {
    const usersText = fs.readFileSync("users.txt").toString();
    const usersArray = usersText.split("\n");
    for (let i = 0; i < usersArray.length; i++) {
      const [userEmail, userPassword, userNickname] = usersArray[i].split(", ");
      if (userEmail === email && userPassword === password) {
        console.log(`로그인에 성공했어요! 닉네임: ${userNickname}`);
        return true;
      }
    }
    console.log(`이메일이 존재하지 않거나, 잘못된 비밀번호 입니다.`);
    return false;
  };

  public signUp = (email: string, password: string, userName: string) => {
    // 이메일 중복 검증
    const usersText = fs.readFileSync("users.txt").toString();
    const usersArray = usersText.split("\n");
    for (let i = 0; i < usersArray.length; i++) {
      const userEmail = usersArray[i].split(", ")[0];
      if (userEmail === email) {
        console.log("중복되는 이메일이 있습니다.");
        return false;
      }
    }
    fs.appendFile("users.txt", `${email}, ${password}, ${userName}\n`, () => {});
    console.log(
      `회원가입에 성공했어요! email: ${email}, password: ${password}, 닉네임: ${userName}`,
    );
    return true;
  };
}