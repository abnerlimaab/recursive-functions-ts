import taxs from '../../__mocks__/tax.mock';
import calculateAnnualTax from '../../functions/calculateAnnualTax';

describe('calculateAnnualTax', () => {
  it('should return 0 when annual income is 0', () => {
    expect(calculateAnnualTax(0, [])).toBe(0);
  });

  it('should return 0 when taxs is empty', () => {
    expect(calculateAnnualTax(1000, [])).toBe(0);
  });

  it('should return 15000 when annual income is 50000', () => {
    expect(calculateAnnualTax(50000, taxs)).toBe(15000);
  });
});
