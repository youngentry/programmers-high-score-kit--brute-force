function getTargetPos(arr, n, m, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (isInGrid(i, j, n, m) && arr[i][j] === target) {
        return [i, j];
      }
    }
  }
}

function isInGrid(x, y, n, m) {
  return x >= 0 && x < n && y >= 0 && y < m;
}

function BFS(queue, maps, n, m, target) {
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    let [x, y, curMove] = queue.shift();

    for (let i = 0; i < dir.length; i++) {
      const dx = x + dir[i][0];
      const dy = y + dir[i][1];
      if (isInGrid(dx, dy, n, m) && maps[dx][dy] !== "X") {
        if (maps[dx][dy] === target) {
          return curMove + 1;
        }
        maps[dx][dy] = "X";
        queue.push([dx, dy, curMove + 1]);
      }
    }
  }

  return -1;
}

function solution(maps) {
  const [n, m] = [maps.length, maps[0].length];
  const leverMaps = maps.map((item) => item.split(""));
  const exitMaps = maps.map((item) => item.split(""));
  const startPos = [...getTargetPos(maps, n, m, "S")];
  const leverPos = [...getTargetPos(maps, n, m, "L")];

  let leverMove = BFS([[...startPos, 0]], leverMaps, n, m, "L");
  if (leverMove === -1) return -1;

  let exitMove = BFS([[...leverPos, 0]], exitMaps, n, m, "E");
  if (exitMove === -1) return -1;

  return leverMove + exitMove;
}

solution(["SLEOO", "OOOOO", "OOOOO", "OOOOO", "OOOOO"]);

// 1x1 칸, 격자 미로
// 통로 또는 벽
// 탈출구는 레버로 열 수 있음
// 최대한 빨리 나가기

// S : 시작 지점
// E : 출구
// L : 레버
// O : 통로
// X : 벽

// 탈출 못하면 -1

// 레버 찾아 열기
// 탈출구 찾아 열기
