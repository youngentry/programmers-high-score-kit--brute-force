function solution(nums) {
  const set = new Set(nums);
  console.log(set, nums.length / 2);
  return nums.length / 2 < set.size ? nums.length / 2 : set.size;
}

solution([3, 1, 2, 3]);
