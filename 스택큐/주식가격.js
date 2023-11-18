function solution(prices) {
  const size = prices.length;

  const result = Array(size).fill(0);

  const stack = [];
  prices.forEach((price, index) => {
    while (stack.length && prices[stack[stack.length - 1]] > price) {
      const topIndex = stack.pop();
      result[topIndex] = index - topIndex;
    }
    stack.push(index);
  });

  while (stack.length) {
    const topIndex = stack.pop();
    result[topIndex] = size - topIndex - 1;
  }
  return result;
}
solution([2, 1, 2, 1, 2, 1]);
// 1. 끝까지 가격이 떨어진지 아닌지는 배열을 모두 확인하기 전까지 결정되지 않음
// 2. 중간에 가격이 떨어진게 결정되는 시점은 => prices[topIndex] > 비교가격
//    ㄴ while로 값이 떨어진게 아닌 index를 만날 때까지 시간을 기록함 => result[topIndex] = index - topIndex
// 3. 끝까지 확인 뒤에도 stack에 남아있는 숫자들은 계속 증가 => (size - 자기 자리의 index - 1)로 결정됨
