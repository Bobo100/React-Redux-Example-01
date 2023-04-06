// components\redux\store\store.tsx
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/counterSlice'
import userReducer from '../slice/userSlice'


export const store = configureStore({
    reducer: {
        counterReducer,
        user: userReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch