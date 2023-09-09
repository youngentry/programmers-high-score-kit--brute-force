const canMove = (xMove, yMove, n, m, maps) => {
  return xMove >= 0 && yMove >= 0 && xMove < n && yMove < m && maps[xMove][yMove] === 1;
};

function solution(maps) {
  const [n, m] = [maps.length, maps[0].length]; // 보드 크기
  const p = [0, 0, 0]; // 플레이어의 x좌표, y좌표, 이동 횟수

  const moveStack = [p]; // 초기 플레이어의 좌표 설정

  const dirs = [
    [-1, 0], // 상
    [1, 0], // 하
    [0, -1], // 좌
    [0, 1], // 우
  ];

  // 이동이 불가능할 때까지 시행합니다.
  while (moveStack.length) {
    console.log(maps);
    const [x, y, count] = moveStack.shift(); // queue를 사용하지 않으면 최단거리가 아니게 된다.

    // p의 좌표가 목적지에 위치해 있다면 이동 횟수를 반환하여 게임을 종료합니다.
    if (x === n - 1 && y === m - 1) {
      return count + 1;
    }

    for (let dir of dirs) {
      const [dx, dy] = dir;
      const xMove = x + dx;
      const yMove = y + dy;

      // 다음으로 이동가능한 좌표가 존재할 경우
      if (canMove(xMove, yMove, n, m, maps)) {
        // 해당 좌표로 이동
        maps[xMove][yMove] = 0; // 방문 표시 남기기
        moveStack.push([xMove, yMove, count + 1]);
      }
    }
  }

  // 최종 목적지에 도달하지 못했다면 -1을 반환합니다.
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
