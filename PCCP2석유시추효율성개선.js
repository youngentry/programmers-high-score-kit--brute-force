function solution(land) {
  const n = land[0].length; // 세로 n
  const m = land.length; // 가로 m

  const oils = Array(n).fill(0);
  const visited = Array(m)
    .fill()
    .map((_) => Array(n).fill(false));
  let volume = 0;
  let startY = 0;
  let finishY = 0;

  for (let j = 0; j < n; j++) {
    startY = j;

    for (let i = 0; i < m; i++) {
      // 방문하지 않은 영역의 석유 덩어리의 크기 구하기
      if (land[i][j] === 1 && !visited[i][j]) {
        drill(land, i, j);
      }

      // 석유 덩어리가 포함하는 모든 Y좌표에 해당 크기를 저장
      for (let k = startY; k <= finishY; k++) {
        oils[k] += volume;
      }
      finishY = 0;
      volume = 0;
    }
  }

  function drill(visited, i, j) {
    visited[i][j] = true;
    volume++;
    finishY = Math.max(finishY, j);

    if (i - 1 >= 0 && visited[i - 1][j] === 1) drill(visited, i - 1, j);
    if (i + 1 < m && visited[i + 1][j] === 1) drill(visited, i + 1, j);
    if (j - 1 >= 0 && visited[i][j - 1] === 1) drill(visited, i, j - 1);
    if (j + 1 < n && visited[i][j + 1] === 1) drill(visited, i, j + 1);
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
