// import {createStore} from 'redux'
import {  configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter'; //inna nazwa nwm dlaczego
import authReducer from './auth';


const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
})


// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer,
//         auth: authSlice.reducer
//     }
    
// });



export default store
