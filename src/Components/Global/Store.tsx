import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux/"
import { TypedUseSelectorHook, useSelector } from "react-redux/"
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage"
import myReducer from "./ReduxState"

const persistConfig = {
    key: "easypay",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, myReducer)

export const store = configureStore({
    reducer: {
        myReducer
    }
})

export const UseAppDispach: () =>
    typeof store.dispatch = useDispatch;
    
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;