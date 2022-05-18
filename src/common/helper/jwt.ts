import * as jwt from 'jsonwebtoken';
export class Jwt {
  userSecretkey: string;
  constructor() {
    this.userSecretkey = process.env.USER_SECRET_KEY;
  }
  generateUserToken(data: any) {
    return jwt.sign(data, this.userSecretkey);
  }
}
