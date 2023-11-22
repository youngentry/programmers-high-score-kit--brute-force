// 0922;

function solution(tickets) {
  const size = tickets.length;
  const result = [];
  const visited = Array(size).fill(0);

  const dfs = (route, via) => {
    // 모든 티켓 사용 시 결과에 추가
    if (route.length === size) {
      route.push(via);
      result.push([...route]);
      return;
    }

    for (let i = 0; i < size; i++) {
      console.log(visited[i], via, tickets[i][0]);
      if (!visited[i] && via === tickets[i][0]) {
        // console.log(tickets[i], route, via, tickets[i][1]);
        visited[i] = 1;
        route.push(via);
        dfs(route, tickets[i][0]);
        visited[i] = 0;
      }
    }
  };

  for (let i = 0; i < tickets.length; i++) {
    const route = new Array();
    if (tickets[i][0] === "ICN") {
      visited[i] = 1;
      route.push(tickets[i][0]);
      dfs([...route], "ICN");
      visited[i] = 0;
    }
  }
  console.log(result);
  return result.sort()[0];
}

// solution([
//   ["ICN", "BOO"],
//   ["ICN", "COO"],
//   ["COO", "DOO"],
//   ["DOO", "COO"],
//   ["BOO", "DOO"],
//   ["DOO", "BOO"],
//   ["BOO", "ICN"],
//   ["COO", "BOO"],
// ]);
// ["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"]
// solution([
//   ["ICN", "ABC"],
//   ["ICN", "ABC"],
//   ["ICN", "ABC"],
//   ["ICN", "ABC"],
//   ["ABC", "ICN"],
//   ["ABC", "ICN"],
//   ["ABC", "ICN"],
//   ["ABC", "ICN"],
// ]);

solution([
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
]);
