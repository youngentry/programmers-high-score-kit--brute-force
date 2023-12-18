function solution(k, d) {
  //   const coordinate = Array(d + 1)
  //     .fill()
  //     .map(() => Array(d + 1).fill(0));

  let count = 0;

  for (let i = 0; i <= d; i += k) {
    for (let j = 0; j <= d; j += k) {
      if (i + j <= d || Math.sqrt(i ** 2 + j ** 2) <= d) {
        // coordinate[i][j] = 1;
        count++;
      } else {
        continue;
      }
    }
  }

  //   console.log(coordinate, count);
  return count;
}

// x축으로 a*k, y축으로 b*k 마다 점 찍기
// 원점과 거리가 d를 넘으면 점 찢지 않음

// solution(2, 4);
// solution(1, 5);

function solution(k, d) {
  let count = 0;

  for (let i = 0; i <= d; i += k) {
    count += Math.floor(Math.sqrt(d ** 2 - i ** 2) / k) + 1;
  }

  return count;
}
