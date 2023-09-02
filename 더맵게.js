function solution(scoville, k) {
  // 섞은 음식의 스코빌 지수 =
  // 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
  const array = scoville.filter((item) => item <= k).sort((a, b) => b - a);

  let count = 0;

  let mixToBeIndex = -1;

  let mixed = [];

  while (array.length >= 2) {
    const mix = Number(array.pop()) + Number(array.pop()) * 2;
    mixed.push(mix);
    count++;
    mixToBeIndex = binarySearch(array, mix);
    console.log(array[mixToBeIndex], mixToBeIndex, mix, mixed);

    while (array[mixToBeIndex] < k && mixToBeIndex >= 0) {
      console.log("?");
      const mix = array.pop() + array.pop() * 2;
      mixed.push(mix);
      count++;
    }

    mixToBeIndex = -1;
    mixed = mixed.sort((a, b) => b - a);
    array.push(mixed);
    mixed = [];
  }

  console.log(count);
  return count;
}

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] >= Number(target)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

solution([1, 2, 3, 9, 10, 12, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9], 7);
