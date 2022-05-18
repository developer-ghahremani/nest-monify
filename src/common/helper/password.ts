import * as bcrypt from 'bcrypt';
export class Password {
  constructor() {}
  hashPass(password: string) {
    return bcrypt.hash(password, 10);
  }
  comparePass(password: string, encrypted: string) {
    return bcrypt.compare(password, encrypted);
  }
}
