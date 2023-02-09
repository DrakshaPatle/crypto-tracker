import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import Sagaapi from './fetchcoinsaga';
const sagaMiddleware = createSagaMiddleware();

const store  = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});


sagaMiddleware.run(Sagaapi);
export default store;