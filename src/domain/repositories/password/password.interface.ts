export interface PasswordRepository {
  generatePassword(password: string): Promise<string>;

  comparePass(password: string, passwordHash: string): Promise<boolean>;
}

export const PasswordRepository = Symbol('PasswordRepository');
