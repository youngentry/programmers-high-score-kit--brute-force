function solution(info, edges) {
  // 양과 늑대 정보
  const who = {};

  info.forEach((item, index) => {
    who[index] = item;
  });

  console.log(who);
  // 모든 루트
  const route = {};

  for (let i = 0; i < edges.length; i++) {
    route[edges[i][0]] = [route[edges[i][0]], edges[i][1]].flat().filter(Boolean);
  }
  console.log(route);

  const list = [0];

  let sheep = 0;
  let wolf = 0;

  for (let line in route) {
    // 양이면 이동
    if (who[line] === 0) {
      list.push(route[line]);
      who[line] ? wolf++ : sheep++;
    }
    console.log(list);

    // console.log(line);
    // console.log(route[line]);
    // 이동
  }
}

solution(
  [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
  [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
    [3, 7],
    [4, 8],
    [6, 9],
    [9, 10],
  ]
);
