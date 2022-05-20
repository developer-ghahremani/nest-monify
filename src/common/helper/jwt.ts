import * as jwt from 'jsonwebtoken';

export class Jwt {
  userSecretkey: string;
  constructor() {
    this.userSecretkey = process.env.USER_SECRET_KEY;
  }
  generateUserToken(data: any) {
    return jwt.sign(data, this.userSecretkey);
  }
  verifyUserToken(data: any) {
    return jwt.verify(data, this.userSecretkey);
  }
}

interface UserIntrerface {
  _id: string;
  firstName: string;
  lastName: string;
}
declare module 'express' {
  interface Request {
    user: UserIntrerface;
  }
}
