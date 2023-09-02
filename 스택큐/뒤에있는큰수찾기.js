function solution(numbers) {
  const result = Array.from({ length: numbers.length }).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    console.log(stack, result);
    console.log(stack[stack.length - 1], numbers[i]);
    // 비교 숫자보다 작다면
    while (stack[stack.length - 1] < numbers[i]) {
      console.log(result, "?????");
      result[stack.pop()] = numbers[i];
    }

    // result 요소를 변환할 인덱스 삽입
    stack.push(i);
  }

  console.log(result);
}

solution([2, 3, 3, 5]);
