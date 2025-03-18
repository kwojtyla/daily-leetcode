function maxProfit(prices: number[]): number {
    let lowestPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentProfit = prices[i] - lowestPrice;
        maxProfit = Math.max(currentProfit, maxProfit);
        lowestPrice = Math.min(lowestPrice, prices[i]);
    }

    return maxProfit;
};