function solution(begin, target, words) {
  const wordLength = words[0].length;
  let result = words.length + 1;

  const dfs = (words, compareWord, count) => {
    const begin = compareWord;

    if (compareWord === target) {
      result = Math.min(count, result);
      return;
    }

    words.forEach((word, index) => {
      let sameCount = 0;
      for (let i = 0; i < wordLength; i++) {
        if (baseWord[i] === compareWord[i]) {
          sameCount++;
        }
      }

      if (sameCount === wordLength - 1) {
        compareWord = word;
        words[index] = "";
        dfs(words, compareWord, count + 1);
        compareWord = begin;
        words[index] = word;
      }
    });
  };

  dfs(words, begin, 0);

  return result === words.length + 1 ? 0 : result;
}
solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cig"]);

// 한 번에 한 개의 알파벳 변경 가능
// words에 존재하는 단어로만 변환 가능
// 중복되는 단어는 없음

// 이미 확인한 워드는 방문처리
// 최소 횟수 탐색
