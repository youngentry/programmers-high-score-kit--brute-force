function solution(phone_book) {
  // 길이가 큰 문자열이 길이가 작은 문자열의 접두어가 될 수 없으므로,
  const sortedBook = phone_book.sort((a, b) => b - a); // 길이가 큰 문자열 앞으로
  const phones = new Map();

  for (let phone of sortedBook) {
    if (phones.has(phone)) return phones.get(phone); // 접두어가 존재할 경우 false 반환

    // 번호로 만들 수 있는 모든 접두어 만들기
    for (let i = 0; i < phone.length; i++) {
      phones.set(phone.slice(0, i), false); // ex) 119 => "1", "11","119"
    }
  }

  return true; // 접두어인 경우가 없으면 true 반환
}
solution(["119", "97674223", "1195524421"]);
