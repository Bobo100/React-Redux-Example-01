// component/redux/slice/userSlice.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { userInitialState } from "../state/stateType"
import { RootState } from "../store/store"

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setUserAge: (state, action: PayloadAction<number>) => {
            state.age = action.payload
        },
        setUserEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        }
    }
})

export const { setUsername, setUserAge, setUserEmail } = userSlice.actions

export const selectUsername = (state: RootState) => state.user.username
export const selectAge = (state: RootState) => state.user.age
export const selectEmail = (state: RootState) => state.user.email

// 把selectors合併成一個 新的selector
export const selectUserData = (state: RootState) => ({
    username: selectUsername(state ),
    age: selectAge(state),
    email: selectEmail(state),
});

export default userSlice.reducer