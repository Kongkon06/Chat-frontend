import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    value: {
        username: string,
        userId: string,
        followers:{},
        following:{},
        token: string,
    }
}
const initialState: UserState = {
    value: {
        username: "",
        userId: "",
        followers:{},
        following:{},
        token: "",
    }
}
const userAuthSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        addUserInfo: (state, action) => {
            state.value = {
                username: action.payload.username,
                userId: action.payload.userId,
                followers:action.payload.follwers,
                following:action.payload.followed,
                token: action.payload.token
            }
        }
    }
})

export const { addUserInfo } = userAuthSlice.actions;
export default userAuthSlice.reducer;