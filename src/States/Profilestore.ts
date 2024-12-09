import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./State";
const initialState : UserState = {
    value:[]
}
const Profileslice = createSlice({
    name:"Profileslice",
    initialState,
    reducers:{
        increamented : (state,action : PayloadAction<UserState["value"]>)=>{
            state.value = [...state.value,...action.payload]
        }
    }
})

export const {increamented} = Profileslice.actions;
export default Profileslice.reducer;