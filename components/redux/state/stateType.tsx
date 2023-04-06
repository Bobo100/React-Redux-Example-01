// Define a type for the slice state
export interface CounterState {
    value: number
}

// Define the initial state using that type
export const initialState: CounterState = {
    value: 0,
}

/////////////////////////////////////// 第二個State 
export interface UserState {
    username: string
    age: number
    email: string
}

export const userInitialState: UserState = {
    username: '',
    age: 0,
    email: ''
}


