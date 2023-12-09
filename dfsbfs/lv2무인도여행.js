function solution(maps) {
  maps = maps.map((map) => map.split(""));
  const row = maps.length;
  const column = maps[0].length;

  const queue = [];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const answer = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (maps[i][j] !== "X") {
        queue.push([i, j]);
        let foods = +maps[i][j];
        maps[i][j] = "X";

        while (queue.length) {
          const [x, y] = queue.shift();

          for (let [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            const isInGrid = nx >= 0 && nx < row && ny >= 0 && ny < column;
            const canVisit = isInGrid && maps[nx][ny] !== "X";

            if (canVisit) {
              queue.push([nx, ny]);
              foods += +maps[nx][ny];
              maps[nx][ny] = "X";
            }
          }
        }

        answer.push(foods);
      }
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

solution(["X591X", "X1X5X", "X231X", "1XXX1"]);

// X는 바다
// 숫자는 식량
// 상하좌우 연결되면 하나의 섬
// 섬 별로 숫자의 합을 오름차순
// 없으면 -1
