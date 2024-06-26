import { Employee } from './employee';

describe('Employee', () => {
  it('should be defined', () => {
    expect(new Employee()).toBeDefined();
  });
});
