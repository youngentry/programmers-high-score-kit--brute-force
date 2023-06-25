function solution(answers) {
  var result = [0, 0, 0];

  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((answer, index) => {
    if (answer === a[index % a.length]) result[0] += 1;
    if (answer === b[index % b.length]) result[1] += 1;
    if (answer === c[index % c.length]) result[2] += 1;
  });

  const winner = [];
  const highScore = Math.max(...result);

  result.forEach((score, index) => {
    if (score === highScore) winner.push(index + 1);
  });

  return winner;
}

solution([1, 3, 2, 4, 2]);

1, 2, 3, 4, 5;
2, 1, 2, 3, 2, 4, 2, 5;
3, 3, 1, 1, 2, 2, 4, 4, 5, 5;
