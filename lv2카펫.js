// // 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다. => 가로로 더 길다

// // brown 모서리를 제외한 - 4 중에서
// brown의 가로 * 2 + brown의 세로 *2 가 yellow

// 구하는 값은 [brown가로 * brown세로]

// brown가로-2 * bronw세로-2 = yellow

// yellow가
// 1개가 되려면 33
// 2개가 되려면 34 43
// 3개가 되려면 53 35
// 4개가 되려면 44 63
// 5개가 되려면 73
// 6개가 되려면 83 54 이 중에서 가로가 더 긴것

// => yellow를 구성할 수 있는 모든 곱셈 구하기 => 약수 구하기

function solution(brown, yellow) {
  const divisor = [];
  // 약수 구하기
  for (let i = 0; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      divisor.push(i);
      divisor.push(yellow / i);
    }
  }

  for (let i = 0; i < divisor.length; i += 2) {
    const column = divisor[i];
    const row = divisor[i + 1];
    if (column * 2 + row * 2 === brown - 4) {
      return [row + 2, column + 2];
    }
  }
}

solution(24, 24);
