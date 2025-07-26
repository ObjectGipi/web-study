import { UserEntity } from "../entity/userEntity";

export class UserDTO {
  public email: string;
  public userName: string;

  public constructor(userEntity: UserEntity) {
    this.email = userEntity.email;
    this.userName = userEntity.userName;
  }
}
