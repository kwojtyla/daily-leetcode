function rotate(nums: number[], k: number): void {
    let i = k;
    while (i > 0) {
      let j = 1;
      nums.unshift(nums[nums.length - j]);
      i--;
      j++;
      nums.length -= 1;
    }
  }