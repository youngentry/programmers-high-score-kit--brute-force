function solution(land) {
  // 세로길이가 n 가로길이가 m인 격자
  // 석유는 여러 덩어리
  // 수직으로 단 하나만 뚫을 수 있을 때 많은 석유를 뽑을 수 있는 시추관의 위치

  // 시추관이 석유 덩어리의 일부를 지나면 해당 덩어리에 속한 모든 석유를 뽑을 수 있습니다.

  // 1. 시추관이 석유에 닿으면 해당 타일의 모든 석유 추출
  // 2. 마지막 까지 확인 뒤 기록 저장
  // 3. 초기화

  const n = land[0].length; // 세로 n
  const m = land.length; // 가로 m

  const tries = Array(n).fill(0);
  let count = 0;

  for (let j = 0; j < n; j++) {
    const currentLand = JSON.parse(JSON.stringify(land));
    for (let i = 0; i < m; i++) {
      if (currentLand[i][j] === 1) {
        drill(currentLand, i, j);
      }
      tries[j] = count;
    }
    count = 0;
  }

  function drill(tryLand, i, j) {
    tryLand[i][j] = 0;
    count++;

    if (i - 1 >= 0 && tryLand[i - 1][j] === 1) drill(tryLand, i - 1, j);
    if (i + 1 < m && tryLand[i + 1][j] === 1) drill(tryLand, i + 1, j);
    if (j - 1 >= 0 && tryLand[i][j - 1] === 1) drill(tryLand, i, j - 1);
    if (j + 1 < n && tryLand[i][j + 1] === 1) drill(tryLand, i, j + 1);
  }

  return Math.max(...tries);
}

solution([
  [1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1],
]);
