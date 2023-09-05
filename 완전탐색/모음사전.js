const solution = (word) => {
  const words = [];

  const alphabets = "AEIOU";

  const getPermutation = (string, pick) => {
    if (string.length === pick) {
      words.push(string);
      return;
    }

    for (let i = 0; i < alphabets.length; i++) {
      getPermutation(string + alphabets[i], pick);
    }
  };

  for (let pick = 1; pick <= 5; pick++) {
    getPermutation("", pick);
  }

  return words.sort().indexOf(word) + 1;
};

solution("AAAAE");
