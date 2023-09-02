import { Tax } from '../types';
import trampoline from '../utils/trampoline';

type TaxCalculator = (
  annualIncome: number,
  taxs: Tax[],
) => number | TaxCalculator;

function calculateAnnualTax(annualIncome: number, taxs: Tax[]): TaxCalculator {
  if (!taxs.length) return () => 0;

  const [tax, ...rest] = taxs;

  if (annualIncome <= tax.limit) {
    return () => annualIncome * tax.tax;
  }

  return () => calculateAnnualTax(annualIncome, rest);
}

export default trampoline(calculateAnnualTax);
