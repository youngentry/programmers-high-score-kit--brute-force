// 어떤 번호가 다른 번호의 접두어인 경우 ? false : true

function solution(phones) {
  const phoneMap = new Map();

  // ["12", "1"] 과 같은 순서로는 접두번호를 판별할 수 없기 때문에 오름차순 정렬이 우선
  phones = phones.sort((a, b) => a - b);

  for (const phone of phones) {
    for (let i = 0; i < phone.length; i++) {
      //  앞부분을 자른 모양이 이미 포함되어 있다면 false ["12", "12999"] => 12999.slice(0,2)가 이미 포함
      if (phoneMap.has(phone.slice(0, i + 1))) {
        return false;
      }
    }
    phoneMap.set(phone, true);
  }

  return true;
}

console.log(solution(["123", "456", "789", "12"]));
