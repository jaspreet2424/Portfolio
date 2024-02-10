import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from '../Reducer/User'

const store = configureStore({
    reducer :{
        User : userReducer,
    }
})

export {store}