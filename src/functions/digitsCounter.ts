import trampoline from '../utils/trampoline';

type DigitsCount = () => number | DigitsCount;

function digitsCounter(num: string, acc: number = 0): DigitsCount {
  if (num.length === 0) {
    return () => acc;
  }
  return () => digitsCounter(num.slice(1), acc + 1);
}

export default trampoline(digitsCounter);
