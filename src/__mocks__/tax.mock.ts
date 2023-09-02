import { Tax } from '../types';

const taxs: Tax[] = [
  {
    limit: 10000,
    tax: 0.1,
  },
  {
    limit: 30000,
    tax: 0.2,
  },
  {
    limit: Infinity,
    tax: 0.3,
  },
];

export default taxs;
