function solution(maps) {
  // 0,0 에서 시작한다

  // 방문한 지점을 0으로 바꾼다

  // 방문하지 않은 지점으로 진행한다

  // 이동횟수를 +1 한다

  // 방문하지 않은 지점이 없다면 p의 위치가 n,m 에 위치했는지 확인한다

  // n,m이 아니라면 -1을 반환한다

  const [n, m] = [maps.length, maps[0].length];
  if (maps[n - 1][m - 2] === 0 && maps[n - 2][m - 1] === 0) {
    return -1;
  }

  const directions = [
    [-1, 0], // 상
    [1, 0], // 하
    [0, -1], // 좌
    [0, 1], // 우
  ];

  maps[0][0] = 0;

  let result = 10000;

  const dfs = (px, py, count, maps) => {
    // maps[px][py] = 0; // 방문한 지점을 0으로 바꾼다
    if (px === n - 1 && py === m - 1) {
      result = Math.min(count, result);
      return;
    }

    for (let dir of directions) {
      const [dx, dy] = dir;
      const [nextX, nextY] = [px + dx, py + dy];
      if (nextX >= 0 && nextY >= 0 && nextX < n && nextY < m) {
        if (maps[nextX][nextY] === 1) {
          maps[nextX][nextY] = 0; // 방문한 지점을 0으로 바꾼다
          dfs(nextX, nextY, count + 1, maps);
          maps[nextX][nextY] = 1; // 방문한 지점을 0으로 바꾼다
        }
      }
    }
  };

  dfs(0, 0, 1, maps);

  if (result !== 10000) return result;
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
