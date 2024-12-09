import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  value: Array<{
    _id: string;
    userId:string;
    content:string;
    date?:string;
    likes?:[];
    userInfo?:[];
  }>;
}

const initialState: UserState = {
  value: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    incremented: (state, action: PayloadAction<UserState["value"]>) => {
      const newPosts = action.payload.filter(
        (newPost) => !state.value.some((post) => post._id === newPost._id)
      );
      state.value = [...state.value, ...newPosts];
    }
  }
});

export const { incremented } = userSlice.actions;
export default userSlice.reducer;
