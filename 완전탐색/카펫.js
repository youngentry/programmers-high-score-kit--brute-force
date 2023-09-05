const solution = (brown, yellow) => {
  // 두 수를 곱해 yellow를 구성할 수 있는 수를 구한다 (약수 구하기)
  const yellowDivisors = [];

  for (let i = 0; i * i <= yellow; i++) {
    if (yellow % i === 0) {
      yellowDivisors.push(i);
      yellowDivisors.push(~~(yellow / i));
    }
  }

  for (let i = 0; i < yellowDivisors.length; i += 2) {
    const [x, y] = yellowDivisors.slice(i, i + 2); // yellow의 약수

    if ((x + 2) * 2 + (y + 2) * 2 - 4 === brown) {
      return [y, x].map((item) => item + 2); // 각각의 수에 +2 해주면 카펫의 가로와 세로가 된다.
    }
  }
};

solution(24, 24);
