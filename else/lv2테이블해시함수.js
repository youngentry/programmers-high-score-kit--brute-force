const sortByCol = (arr, num) => {
  return arr.sort((a, b) => {
    if (a[num - 1] === b[num - 1]) {
      return b[0] - a[0]; // 동일한 값이면 첫번째 컬럼의 값을 기준으로 내림차순 정렬
    } else {
      return a[num - 1] - b[num - 1]; // col 번째 컬럼의 값을 기준으로 오름차순 정렬
    }
  });
};

const getMod = (tuple, divide) => {
  let count = 0;
  for (let num of tuple) {
    count += num % (divide + 1);
  }
  return count;
};

function solution(data, col, row_begin, row_end) {
  const sortedTuple = sortByCol(data, col);

  let bits = [];
  for (let i = row_begin - 1; i < row_end; i++) {
    const modBits = getMod(sortedTuple[i], i).toString(2);
    bits.push(modBits);
  }

  const bitsSortedByLength = bits.sort((a, b) => b.length - a.length);
  const initialBit = bitsSortedByLength[0];
  const bitwiseXOR = initialBit.split("");

  for (let i = 0; i < bitsSortedByLength.length - 1; i++) {
    let nextBit = bitsSortedByLength[i + 1];
    if (nextBit.length < initialBit.length) {
      nextBit = nextBit.padStart(initialBit.length, "0");
    }

    for (let j = 0; j < bitsSortedByLength[0].length; j++) {
      bitwiseXOR[j] = bitwiseXOR[j] !== nextBit[j] ? "1" : "0";
    }
  }

  return parseInt(bitwiseXOR.map((string) => (+string ? "1" : "0")).join(""), 2);
}

// 정수타입 컬럼
// 2차원 행렬
// 열은 컬럼, 행은 튜플
// 첫번쨰 컬럼은 기본키로, 모든 튜플에 대해 그 값이 중복되지 않도록 보장.

// 정해진 방법에 따라 튜플을 정렬하면 {4, 2, 9}, {2, 2, 6}, {1, 5, 10}, {3, 8, 3} 이 됩니다.

//  bitwise XOR
// 비트단위 XOR 연산은 두 개의 숫자를 비교하여 각 자릿수별로 다를 때만 1을 반환하고, 같을 때는 0을 반환하는 연산입니다. 예를 들어, 두 비트가 같으면 결과는 0이 되고, 다르면 1이 됩니다.

// 배열길이 2500, 원소 길이 500

solution(
  [
    [2, 2, 6],
    [1, 5, 10],
    [4, 2, 9],
    [3, 8, 3],
  ],
  2,
  2,
  3
);
