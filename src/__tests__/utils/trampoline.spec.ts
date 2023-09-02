import trampoline from '../../utils/trampoline';

type Func = () => number | Func;

function factorial(n: number, accumulator = 1): Func {
  if (n <= 1) {
    return () => accumulator;
  }
  return () => factorial(n - 1, n * accumulator);
}

describe('trampoline', () => {
  it('deve retornar o resultado corretamente para uma função simples', () => {
    const add = trampoline((a, b) => a + b);
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it('deve lidar com funções recursivas usando trampolining', () => {
    const factorialTrampolined = trampoline(factorial);
    const result = factorialTrampolined(5);
    expect(result).toBe(120);
  });

  it('deve lidar com funções recursivas profundas usando trampolining', () => {
    const deepFactorial = trampoline(factorial);
    const result = deepFactorial(1000);
    expect(result).toBeGreaterThan(0);
  });
});
