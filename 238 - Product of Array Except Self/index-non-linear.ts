function productExceptSelfNonLinear(nums: number[]): number[] {
    const products: number[] = [];
    
    for (const num in nums) {
        let numBackup = nums[num];
        nums[num] = 1;
        products[num] = nums.reduce((acc, current) => acc * current);
        nums[num] = numBackup;
    }

    return products;
};