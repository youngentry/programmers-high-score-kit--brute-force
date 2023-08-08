const dfs = (string, pick, result) => {
  const rule = "AEIOU".split("");
  if (pick === string.length) {
    result.push(string);
    return;
  }
  rule.forEach((alphabet) => {
    dfs(string + alphabet, pick, result);
  });
};

function solution(word) {
  const result = [];
  const string = "";
  for (let i = 1; i <= 5; i++) {
    dfs(string, i, result);
  }
  return result.sort().indexOf(word) + 1;
}

solution("AAAAE");
