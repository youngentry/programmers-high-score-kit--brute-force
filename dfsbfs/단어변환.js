function solution(begin, target, words) {
  const isChangeableWord = (base, compare) => {
    let count = 0;
    const wordLength = base.length;

    for (let i = 0; i < wordLength; i++) {
      if (base[i] === compare[i]) count++;
    }

    return count === wordLength - 1 ? true : false;
  };

  const startList = [];
  for (let i = 0; i < words.length; i++) {
    if (isChangeableWord(begin, words[i])) {
      startList.push(i);
    }
  }

  console.log(startList, "startList");

  // 변환 가능한 word 인접리스트 생성
  const obj = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < words.length; j++) {
      if (isChangeableWord(word, words[j])) {
        obj[word] ? (obj[word] = [...obj[word], j]) : (obj[word] = [j]);
      }
    }
  }

  console.log(obj, "obj");

  let result = Infinity;

  for (let i = 0; i < startList.length; i++) {
    let count = 0;

    const startIndex = startList[i];
    const indexStack = [...obj[words[startIndex]]];
    const visited = Array(words.length).fill(0);
    visited[startIndex] = 1;
    count++;

    while (indexStack.length) {
      const curIdx = indexStack.shift();
      console.log(curIdx, "curIdx", indexStack, "indexStack");
      console.log(visited);
      if (words[indexStack] === target) {
        return count;
      }
      if (!visited[curIdx]) {
        indexStack.push(...obj[words[curIdx]]);
        console.log(...obj[words[curIdx]], "...obj[words[curIdx]]");
        count++;
        visited[curIdx] = 1;
      }
    }

    result = Math.min(result, count);
  }

  console.log(0);
  return 0;
}
solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
