


export const coinData = (data = [], action) => {
    switch (action.type) {
            case "fetch_coins":
                console.warn("PRODUCT_LIST condition ", action)
                return [...action.data]
        default:
            return data
    }
}