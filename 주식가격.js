function solution(prices) {
  const result = Array(prices.length).fill(0);

  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    // while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
    //   const index = stack.pop();
    //   result[index] = i - index;
    // }

    stack.push(i);
    console.log(stack, result);
  }
  while (stack.length) {
    let temp = stack.pop();
    result[temp] = prices.length - temp - 1;
  }
  console.log(result);
}

solution([1, 2, 3, 2, 3]);
