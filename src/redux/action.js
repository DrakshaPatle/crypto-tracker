export const fetchTrendingCoins = (currency) => {
  
    return {
        type: "fetch_coin",
        currency
    }
}