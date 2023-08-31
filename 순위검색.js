function solution(infos, queries) {
  // condition을 key로, 점수를 value로 하는 맵 생성
  const candidates = new Map();

  infos.forEach((info) => {
    let key = info.split(" ");
    const value = Number(key.pop());
    key = key.join("");

    candidates.set(key, candidates.get(key) ? [...candidates.get(key), value] : [value]);
  });

  console.log(candidates);

  // 점수에 이진 탐색을 적용하기 위해서 점수를 내림차순으로 정렬
  candidates.forEach((value, key) => {
    candidates.set(
      key,
      value.sort((a, b) => a - b)
    );
  });

  const result = [];
  // 자격 판별
  queries.forEach((query) => {
    const requirements = query.split(" ").filter((item) => item !== "-" && item !== "and");
    const score = Number(requirements.pop());

    // requirements를 만족하는 지원자 필터링
    const requireFiltered = Array.from(candidates).filter((candidate) =>
      requirements.every((require) => candidate[0].includes(require))
    );

    // requirements를 만족하는 지원자 중에서 score를 만족하는 지원자 카운트
    const scoreFulfilCount = requireFiltered
      .map((item) => {
        const targetScoreIndex = binarySearch(item[1], score);
        const scores = item[1].length;
        return scores - targetScoreIndex;
      })
      .reduce((total, score) => total + score, 0);

    result.push(scoreFulfilCount);
  });

  return result;
}

const binarySearch = (array, score) => {
  let left = 0;
  let right = array.length;

  while (left < right) {
    // 가운데 인덱스 설정
    const middle = Math.floor((left + right) / 2);

    if (array[middle] >= score) {
      // middle이 score보다 클 결우 right를 절반으로
      right = middle;
    } else {
      // middle이 score보다 작을 경우 left를 절반으로
      left = middle + 1;
    }
  }

  return left;
};

const sample = Array.from({ length: 20 }, (_, index) => index * 2);

console.log(sample);

solution(
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ]
);
