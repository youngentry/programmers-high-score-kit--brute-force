const solution = (n, computers) => {
  const obj = {}; // 각각의 컴퓨터와 연결된 네트워크를 기록
  const visited = Array.from({ length: n }).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 자기 자신은 항상 1이므로 제외
      if (i === j) continue;

      // i번째 컴퓨터와 연결된 컴퓨터의 index기록
      if (computers[i][j]) {
        obj[i] = obj[i] ? [...obj[i], j] : [j];
      }
    }
  }

  console.log(obj);

  let count = n; // 처음엔 모든 네트워크가 끊겨있다고 가정하고,

  // 각각의 컴퓨터를 확인
  for (let i in obj) {
    const queue = [...obj[i]];
    visited[i] = 1; // i번째 네트워크 방문처리

    // 연결된 네트워크가 있을 때
    while (queue.length) {
      const next = queue.shift();

      // 방문하지 않은 네트워크라면
      if (!visited[next]) {
        visited[next] = 1; // 다음번 네트워크 방문처리
        queue.push(...obj[next]); // 해당 컴퓨터와 연결된 네트워크들을 추가
        count--; // 네트워크 연결
      }
    }
  }

  return count;
};

solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
