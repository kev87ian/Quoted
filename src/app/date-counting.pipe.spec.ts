import { DateCountingPipe } from './date-counting.pipe';

describe('DateCountingPipe', () => {
  it('create an instance', () => {
    const pipe = new DateCountingPipe();
    expect(pipe).toBeTruthy();
  });
});
