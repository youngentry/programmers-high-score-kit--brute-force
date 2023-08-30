function solution(board, skill) {
  const row = board.length;
  const column = board[0].length;
  const cumulated = Array.from({ length: row + 1 }, () => Array(column + 1).fill(0));

  skill.forEach((item) => {
    const [type, r1, c1, r2, c2, degree] = item;
    console.log(`(${r1},${c1}), (${r2},${c2}), degree:${degree}`);
    const role = type === 1 ? -1 : 1;

    cumulated[r1][c1] += role * degree; // 왼쪽 위 +
    cumulated[r1][c2 + 1] -= role * degree; // 오른쪽 위 -
    cumulated[r2 + 1][c1] -= role * degree; // 왼쪽 아래 -
    cumulated[r2 + 1][c2 + 1] += role * degree; // 오른쪽 아래 +
  });

  console.log(cumulated);
  // row에 대하여 누적합
  for (let i = 0; i < row; i++) {
    let sum = 0;

    for (let j = 0; j < column; j++) {
      sum += cumulated[i][j];
      cumulated[i][j] = sum;
    }
  }

  console.log(cumulated);
  // column에 대하여 누적합
  for (let i = 0; i < column; i++) {
    let sum = 0;

    for (let j = 0; j < row; j++) {
      sum += cumulated[j][i];
      cumulated[j][i] = sum;
    }
  }

  console.log(cumulated);
  // board 배열과 누적합 배열을 합하기
  let answer = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      board[i][j] += cumulated[i][j];

      if (board[i][j] > 0) {
        answer++;
      }
    }
  }
  console.log(board);
  console.log(answer);
}

solution(
  [
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
  ],
  [
    [1, 0, 0, 3, 4, 4],
    [1, 2, 0, 2, 3, 2],
    [2, 1, 0, 3, 1, 2],
    [1, 0, 1, 3, 3, 1],
  ]
);
