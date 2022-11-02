import { applyMiddleware, configureStore } from "@reduxjs/toolkit"
import Todo from "./reducers/Todo"
import logger from "redux-logger"
import persistReducer from "redux-persist/es/persistReducer"
import AsyncStorage from "@react-native-async-storage/async-storage"
import rootReducer from "./reducers"
import persistStore from "redux-persist/es/persistStore"

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [logger]
})

export const persistor = persistStore(store)

export default store