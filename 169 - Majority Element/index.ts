function majorityElement(nums: number[]): number {
    const numsMap = new Map()
    let majorityNum; 

    nums.forEach((num) => { 
        const value = numsMap.has(num) ? numsMap.get(num) + 1 : 1;
        numsMap.set(num, value);

        if (value > nums.length / 2) {
            majorityNum = num;
        }
    })

    return majorityNum;
};