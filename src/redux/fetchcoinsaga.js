import { takeEvery, put } from 'redux-saga/effects'

function* TrendingCoins(currency) {
    let data = yield fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
           );
    data= yield result.json();
    console.warn("action is called", data)
    yield put({type: "fetch_coins", data})
}

function* Sagaapi() {
    yield takeEvery("fetch_coins", TrendingCoins)
   

}
export default Sagaapi;