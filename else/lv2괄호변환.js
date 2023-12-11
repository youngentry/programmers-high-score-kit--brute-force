//   4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
const flip = (bracket) => {
  let result = "";
  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === "(") {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
};

// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
const divide = (w) => {
  let left = 0;
  let right = 0;
  for (let i = 0; i < w.length; i++) {
    w[i] === "(" ? left++ : right++;
    if (left === right) break;
  }
  const u = w.slice(0, right * 2);
  const v = w.slice(right * 2);
  return [u, v];
};

const isRightBracket = (bracket) => {
  const stack = [];
  stack.push(bracket[0]);
  let index = 1;

  while (index < bracket.length) {
    if (stack[stack.length - 1] === "(" && bracket[index] === ")") {
      stack.pop();
    } else {
      stack.push(bracket[index]);
    }
    index++;
  }

  return stack.length ? false : true;
};

function solution(p) {
  // 짝이 맞지 않는 괄호가 문제
  // 모든 괄호를 뽑아 순서대로 배치된 괄호 문자열을 알려줌
  // () 개수가 같으면 '균형잡힌 괄호 문자열' w
  // 괄호와 짝 모두가 맞으면 '올바른 괄호 문자열'

  const wornl = (p) => {
    // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
    if (p === "") return "";

    // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
    const [u, v] = divide(p);

    // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
    //   3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
    if (isRightBracket(u)) {
      const result = wornl(v);
      return u + result;
    } else {
      // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
      //   4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
      const blankString = "(";
      //   4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
      const wornlResult = wornl(v);
      //   4-3. ')'를 다시 붙입니다.
      const newV = blankString + wornlResult;
      //   4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
      const rightAddedBracket = newV + ")";
      //   4-5. 생성된 문자열을 반환합니다.
      const finish = rightAddedBracket + flip(u.slice(1, -1));
      return finish;
    }
  };
  console.log(wornl(p));
  return wornl(p);
}

solution("(()())()");
solution(")(");
solution("()))((()");
