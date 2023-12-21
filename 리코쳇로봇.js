function findR(maps) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "R") {
        return [i, j];
      }
    }
  }
}

function solution(board) {
  const maps = board.map((row) => ["D", ...row.split(""), "D"]);
  const walls = [..."D".repeat(maps[0].length).split("")];
  maps.unshift(walls);
  maps.push(walls);
  const [n, m] = [maps[0].length, maps.length];
  const startPos = findR(maps);
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue = [[...startPos, 0]];

  console.log(maps);

  while (queue.length) {
    let [x, y, move] = queue.shift();

    for (let i = 0; i < dir.length; i++) {
      let dx = x;
      let dy = y;

      while (
        !(dx + dir[i][0] <= 0 || dx + dir[i][0] >= n || dy + dir[i][1] <= 0 || dy + dir[i][1] >= m) &&
        maps[dx + dir[i][0]][dy + dir[i][1]] !== "D"
      ) {
        dx += dir[i][0];
        dy += dir[i][1];
      }

      console.log(dx, dy);
      console.log(maps[dx][dy]);

      if (maps[dx][dy] === "G") {
        console.log(move, "move");
        return move;
      }

      if (maps[dx - dir[i][0]][dy - dir[i][1]] === "." || maps[dx - dir[i][0]][dy - dir[i][1]] === "R") {
        maps[dx - dir[i][0]][dy - dir[i][1]] = "X";
        queue.push([dx, dy, ++move]);
      }

      console.log(maps);
    }
  }

  console.log(-1);
  return -1;
}

// solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]);
solution([".D.R", "....", ".G..", "...D"]);
