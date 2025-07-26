export class UserEntity {
  public email: string;
  public password: string;
  public userName: string;

  public constructor(email: string, password: string, userName: string) {
    this.email = email;
    this.password = password;
    this.userName = userName;
  }
}
