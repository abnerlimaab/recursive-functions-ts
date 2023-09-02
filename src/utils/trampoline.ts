function trampoline<T extends (...args: any[]) => any>(
  f: T,
): (...args: Parameters<T>) => ReturnType<T> {
  return (...args: Parameters<T>) => {
    let result = f(...args);

    while (typeof result === 'function') {
      result = result();
    }

    return result;
  };
}

export default trampoline;
