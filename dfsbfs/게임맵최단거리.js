function solution(maps) {
  const m = maps.length;
  const n = maps[0].length;

  const direction = [[-1, 0], [1, 0], [0, -1][(0, 1)]];

  const p = [[0, 0, 0]];

  maps[0][0] = 0;

  while (p.length) {
    console.log(maps);
    const [x, y, move] = p.shift();
    console.log(x, y, move);

    if (x === n - 1 && y === m - 1) return move;

    direction.forEach((dir) => {
      const nextX = x + dir[0];
      const nextY = y + dir[1];
      if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n)
        if (maps[nextX][nextY] === 1) {
          maps[nextX][nextY] = 0;
          p.push([nextX, nextY, move + 1]);
        }
    });
  }

  return -1;
}
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
