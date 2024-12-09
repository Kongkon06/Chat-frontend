import { createSlice } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
interface state{
    value:Socket | null
}
const initialState:state = {
    value:null
} 
const WebsocStore = createSlice({
    name:"WebsocStore",
    initialState,
    reducers:{
        increamented:(state,action)=>{
            state.value= action.payload
        }
    }
})
export const { increamented } = WebsocStore.actions;
export default WebsocStore.reducer;