import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState } from "../state/stateType"
import { RootState } from "../store/store"

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.value

export default counterSlice.reducer









////
// export const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         username: '',
//         age: 0,
//         email: ''
//     },
//     reducers: {
//         setUsername: (state, action: PayloadAction<string>) => {
//             state.username = action.payload
//         },
//         setAge: (state, action: PayloadAction<number>) => {
//             state.age = action.payload
//         },
//         setEmail: (state, action: PayloadAction<string>) => {
//             state.email = action.payload
//         }
//     }
// })

// export const { setUsername, setAge, setEmail } = userSlice.actions

// export const selectUsername = (state: RootState) => state.user.username
// export const selectAge = (state: RootState) => state.user.age
// export const selectEmail = (state: RootState) => state.user.email

// export default userSlice.reducer
