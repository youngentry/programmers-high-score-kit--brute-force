// 자신의 차례에 이동할 수 없다 or 같은 발판 위에서 A가 다른곳으로 이동한다.
// 가장 이동 횟수가 많은 경우의 수 찾기
// 두 플레이어의 이동횟수 합 반환

// 자기 차례에 무조건 움직여야한다.
// 이동하면 이동 전 자리의 발판이 사라진다
// 발판이 없거나 발판 밖으로는 못 간다.

function solution(board, aloc, bloc) {
  const dir = [
    [-1, 0], // 상
    [1, 0], // 하
    [0, -1], // 좌
    [0, 1], // 우
  ];

  const isInBoard = (x, y) => {
    return x >= 0 && x < board.length && y >= 0 && y < board[0].length;
  };

  const isFailMove = (x, y) => {
    let isFail = true;
    for (let i = 0; i < 4; i++) {
      const xd = x + dir[i][0];
      const yd = y + dir[i][1];
      if (isInBoard(xd, yd) && board[xd][yd]) {
        isFail = false;
      }
    }
    return isFail;
  };

  const dfs = (board, x1, y1, x2, y2) => {
    const result = [false, 0];

    // 종료조건: 1. 자기 차례에 못 움직일 때
    if (isFailMove(x1, y1)) {
      return result;
    }

    // 종료조건: 2. 발판이 사라져있을 때
    if (x1 === x2 && y1 === y2) {
      result[1] += 1;
      return result;
    }

    let minCount = Number.MAX_SAFE_INTEGER;
    let maxCount = 0;

    // 움직일 수 있는 모든 경로 탐색
    for (let i = 0; i < 4; i++) {
      const xd = x1 + dir[i][0];
      const yd = y1 + dir[i][1];

      // 보드 바깥일 때는 제외
      if (!isInBoard(xd, yd) || !board[xd][yd]) {
        continue;
      }

      board[x1][y1] = 0;
      const temp = dfs(board, x2, y2, xd, yd);
      board[x1][y1] = 1;

      if (!temp[0]) {
        temp[0] = true;
        minCount = Math.min(minCount, temp[1]);
      } else if (!temp[0]) {
        maxCount = Math.max(maxCount, temp[1]);
      }
    }
    result[1] = result[0] ? minCount + 1 : maxCount + 1;
    return result;
  };

  console.log(dfs(board, aloc[0], aloc[1], bloc[0], bloc[1])[1]);
  return dfs(board, aloc[0], aloc[1], bloc[0], bloc[1])[1];
}

solution(
  [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
  [1, 0],
  [1, 2]
);

// solution(
//   [
//     [1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 1],
//     [1, 0, 0, 0, 1],
//     [1, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1],
//   ],
//   [0, 0],
//   [4, 4]
// );
