const solution = (numbers) => {
  const result =
    numbers
      .map(String)
      .sort((a, b) => b + a - (a + b))
      .join("") || "0";

  return result * 1 === 0 ? "0" : result;
};
