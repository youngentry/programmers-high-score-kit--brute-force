const solution = (s) => {
  const result = [];

  // j는 문자열을 얼마만큼 자를지 결정하는 수
  for (let j = 1; j < s.length / 2 + 1; j++) {
    let compressed = "";
    let current = s.slice(0, j);
    let count = 0;

    for (let i = 0; i < s.length; i += j) {
      // slice(i,i+j) i부터 j개씩 씩 자르기
      const next = s.slice(i, i + j);

      if (current === next) {
        // 이전 문자열의 생김새가 비교 중인 문자열의 생김새와 같으면 count ++
        count++;
      } else {
        // 생김새가 다르면 2a 형태로 추가
        compressed += `${count === 1 ? "" : count}${current}`;
        current = next;
        count = 1;
      }

      // 나머지 문자열에 대해 처리
      if (i + j >= s.length) {
        compressed += `${count === 1 ? "" : count}${current}`;
      }
    }
    result.push(compressed.length);
  }

  console.log(result);
  return Math.min(...result);
};

solution("aabbaccc");
