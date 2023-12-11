function solution(n, wires) {
  const tree = [...new Array(n + 1)].map((_) => []);
  console.log(tree);
  for (const [start, next] of wires) {
    tree[start].push(next);
    tree[next].push(start);
  }

  console.log(tree);
}

solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);

// 트리 형태의 전력망
// 네트워크를 2개로 분할하는데, 각각의 네트워크가 최대한 비슷한 개수를 가지도록 한다
// 둘의 차이를 반환하라

// 1. 일단 트리를 만든다
// 2. 트리의 연결부를 하나씩 끊은 순열을 만든다 [1전력망, 2전력망]
// 3. 둘의 요소 차이를 비교하여 가장 작은 수를 반환
