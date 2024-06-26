import { PasswordRepository } from 'src/domain/repositories/password/password.interface';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptRepository implements PasswordRepository {
  async comparePass(password: string, passwordHash: string): Promise<boolean> {
    const pass = await bcrypt.hash(passwordHash, 10);

    return bcrypt.compare(password, pass);
  }

  generatePassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }
}
