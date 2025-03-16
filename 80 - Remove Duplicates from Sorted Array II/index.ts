function removeDuplicates(nums: number[]): number {
    const numsMap = new Map();

    nums.forEach((num) => {
        if (numsMap.has(num)) {
            if (numsMap.get(num) < 2) {
                numsMap.set(num, (numsMap.get(num) + 1));
            }
        } else {
            numsMap.set(num, 1);
        }
    }) 

    nums.length = 0;

    numsMap.forEach((value, key) => {
        for (let i = 0; i < value; i++) {            
            nums.push(key);
        }
    })

    const k = nums.length;
    return k;
};