import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',

    initialState : {
        id:0,
    },

    reducers: {
        increment: (state) => {
            state.id += 10
        },
    },
})

export const { increment } = userSlice.actions

export default userSlice.reducer