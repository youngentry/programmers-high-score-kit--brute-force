function solution(prices) {
  const result = Array.from({ length: prices.length }).fill(0);

  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] < stack[stack.length - 1]) {
      const pop = stack.pop();
      result[pop] = i - pop;
    }

    stack.push(i);
  }

  console.log(stack);
  while (stack.length) {
    const pop = stack.pop();
    result[pop] = prices.length - pop - 1;
  }

  console.log(result);
  return result;
}

solution([1, 2, 3, 4, 3, 2, 1]);

// 1,2,3,2에서 3보다 2가 작으니까 3을 제외하고 stack에서 마지막 제외
// 1,2,3,1 이라면 stack에서 3,2 제외

// 1. => 더이상 작지 않을 때까지 stack에서 제외한다.
// 2. 시간 결정은 제외된 카운트를 하고,
// 현재 index - 제외된 카운트의 수를 정한다.
