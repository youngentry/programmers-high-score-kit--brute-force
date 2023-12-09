function solution(land) {
  const n = land[0].length; // 세로 n
  const m = land.length; // 가로 m

  const oils = Array(n).fill(0);
  const visited = Array(m)
    .fill()
    .map((_) => Array(n).fill(false));

  const queue = [];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        let volume = 0;
        let startY = j;
        let finishY = 0;

        queue.push([i, j]);
        visited[i][j] = true;

        while (queue.length) {
          const [x, y] = queue.shift();
          volume++;
          finishY = Math.max(finishY, y);

          for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            const isInGrid = nx >= 0 && nx < m && ny >= 0 && ny < n;
            const canDrill = isInGrid && !visited[nx][ny] && land[nx][ny] === 1;

            if (canDrill) {
              queue.push([nx, ny]);
              visited[nx][ny] = true;
            }
          }
        }

        for (let k = startY; k <= finishY; k++) {
          oils[k] += volume;
        }
      }
    }
  }

  return Math.max(...oils);
}

solution([
  [1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 1],
]);
