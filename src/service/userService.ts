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
}
