const solution = (clothes) => {
  const map = new Map();

  for (let i = 0; i < clothes.length; i++) {
    const [name, kind] = clothes[i];
    map.set(kind, map.get(kind) ? [...map.get(kind), name] : [name]);
  }

  const allItem = Array.from(map).map((item) => item[0] + item[1]);

  const set = new Set();

  allItem.forEach((items) => {
    items.forEach((item) => {});
  });
};

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]); // 5
