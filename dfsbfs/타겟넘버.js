function solution(numbers, target) {
  const numbersLength = numbers.length;

  let count = 0;

  const dfs = (number, i) => {
    if (i === numbersLength) {
      if (number === target) {
        count++;
      }
      return;
    }

    dfs(number + numbers[i], i + 1);
    dfs(number - numbers[i], i + 1);
  };

  dfs(0, 0);

  return count;
}

solution([1, 1, 1, 1, 1], 3);
