function solution(n, wires) {
  // 한 개씩 배열에서 제외해가며 만든 전력망을 비교한다.
  const wireLength = wires.length;

  const allPlans = []; // 전력망이 하나씩 끊긴 경우의 수

  for (let i = 0; i < wires.length; i++) {
    const removedWire = wires.pop(); // 전선망을 한 개씩 끊기
    console.log(removedWire);

    const map = {};

    for (let i = 1; i <= n; i++) {
      map[i] = [];
    }

    wires.forEach((wire) => {
      const start = map[wire[0]];
      const next = wire[1];

      map[wire[0]] = start ? [...start, next] : [next];
    });
    allPlans.push(map); // 간선 리스트 추가
    // console.log(wires);
    wires.unshift(removedWire); // 전성망을 복구할 때는 unshift()로 다음 차시에서 다른 전성망을 끊도록 함
  }

  let result = wireLength;

  //   console.log(allPlans);

  allPlans.forEach((list, index) => {
    console.log(list);

    const stack = [];

    const firstWire = Object.entries(list)[index][0];
    stack.push(firstWire);

    let towerCount = 1;

    while (stack.length) {
      const check = stack.pop();
      console.log(check, "check");
      console.log(list[check], "list[check]");
      if (list[check]) {
        towerCount++;
        list[check].forEach((next) => {
          if (list[next]) {
            stack.push(...list[next]);
          }
        });
      }
      console.log(stack, "stack");
    }

    result = Math.min(result, Math.abs(n - towerCount - towerCount));
    console.log(towerCount, "towerCount");
  });

  console.log(result);
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
