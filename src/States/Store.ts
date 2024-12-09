import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./State"
import userAuthReducer from "./Userstore"
import msgReducer from "./MgsStore"
import webReducer from "./Websoc"
export const store = configureStore({
    reducer : {
        user : userReducer}
})

export const userInfoStore = configureStore({
    reducer : {
        userInfo : userAuthReducer
    }
})

export const msgStore = configureStore({
    reducer : msgReducer
})

export const webStore = configureStore({
    reducer: {
        webSocket: webReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredPaths: ["webSocket.value"], // Ignore the WebSocket value
            ignoredActions: ["WebsocStore/increamented"], // Ignore this action
          },
        }),
})