function solution(numbers) {
  const result = Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    // 배열의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까운 수일 때
    // 자신:    numbers[stack.at(-1)] (result에 할당되지 않은 index의 수는 numbers[index])
    // 뒷 큰수: numbers[i]
    while (stack.length && numbers[stack.at(-1)] < numbers[i]) {
      const topIndex = stack.pop();
      result[topIndex] = numbers[i];
    }

    // result에 할당되지 않은 index를 stack에 추가
    stack.push(i);
  }
  return result;
}

solution([9, 1, 5, 3, 6, 2]);
