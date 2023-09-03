import digitsCounter from '../../functions/digitsCounter';

describe('digitsCounter', () => {
  it(`should returns 0 for empty string`, () => {
    expect(digitsCounter('')).toBe(0);
  });

  it(`should returns 1 for 0`, () => {
    expect(digitsCounter('0')).toBe(1);
  });

  it(`should make deep recursion for 55512345675551234567`, () => {
    expect(digitsCounter('55512345675551234567')).toBe(20);
  });
});
