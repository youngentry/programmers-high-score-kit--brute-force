function solution(numbers, target) {
  const operatorSet = new Set(); // 더하기 빼기로 조합할 수 있는 경우의 수 생성

  const numbersLength = numbers.length;

  const dfs = (arr, pick) => {
    if (pick === 0) {
      operatorSet.add(arr.join(""));
      return;
    }

    for (let j = 0; j < numbersLength; j++) {
      arr[j] = "-"; // "-"로 바꾸어 주기
      // arr[j] = "+"; // "+"로 되돌려 주기
      dfs(arr, pick - 1);
      arr[j] = "+"; // "+"로 바꾸어 주기
    }
  };

  for (let pick = 0; pick <= numbersLength; pick++) {
    // "-"의 갯수 pick은 0개부터 5개까지 조합 가능
    dfs([..."+".repeat(numbersLength)], pick);
  }
  console.log(operatorSet);

  let result = 0;

  operatorSet.forEach((operators) => {
    let sum = 0;

    const operatorArray = operators.split("");

    operatorArray.forEach((each, index) => {
      sum += eval(each + numbers[index]);
    });

    if (sum === target) result++;
  });

  console.log(result);
  return result;
}

solution([1, 1, 1, 1, 1], 3);
