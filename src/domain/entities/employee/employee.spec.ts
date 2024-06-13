import { Employee } from './employee';

describe('User', () => {
  it('should be defined', () => {
    expect(new Employee()).toBeDefined();
  });
});
