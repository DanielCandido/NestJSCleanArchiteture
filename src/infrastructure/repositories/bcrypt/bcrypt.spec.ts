import { BcryptRepository } from './bcrypt';

describe('Bcrypt', () => {
  it('should be defined', () => {
    expect(new BcryptRepository()).toBeDefined();
  });
});
