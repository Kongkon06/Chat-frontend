import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Body{
connection:string[];
content:Array<{
  content:string,
  author:string
}>

}
const userList = new Map<string ,Body>()
interface MsgState {
 users : Map<string , Body>
  currentmsg: string,
}  
const initialState:MsgState = {
  users:userList,
  currentmsg:""
} 
const msgSlice = createSlice({
  name: "msgSlice",
  initialState,
  reducers: {
    incremented: (state, action: PayloadAction<Body>) => {
      state.users.set(action.payload.connection[0] ,action.payload)
    },
    increamentedmsguser : (state, action: PayloadAction<string>) => {
      state.currentmsg = action.payload
    },
  }
});

export const { incremented,increamentedmsguser } = msgSlice.actions;
export default msgSlice.reducer;
