function removeDuplicates(nums: number[]): number {
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--;
        }
    }

    const k = nums.length;
    return k
};