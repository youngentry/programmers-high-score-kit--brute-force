function solution(prices) {
  const size = prices.length;

  const result = Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < size; i++) {
    while (stack.length && prices[stack.at(-1)] > prices[i]) {
      const top = stack.pop();
      result[top] = i - top;
    }
    stack.push(i);
  }

  while (stack.length) {
    const top = stack.pop();
    result[top] = size - top - 1;
  }
}

solution([1, 2, 3, 2, 3]);
