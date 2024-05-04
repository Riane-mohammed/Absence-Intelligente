import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    role: null,
    name: '',
    email: '',
    password: '',
};

const savedUserState = localStorage.getItem('userState');
const UserState = savedUserState ? JSON.parse(savedUserState) : initialState;

export const userSlice = createSlice({
    name: 'user',
    initialState: UserState,
    reducers: {
        setUser: (state, action) => {
            const { id, role, name, email, password } = action.payload;
            state.id = id;
            state.role = role;
            state.name = name;
            state.email = email;
            state.password = password;
            localStorage.setItem('userState', JSON.stringify(action.payload));
        },
        logoutUser: (state) => {
            localStorage.removeItem('userState');
            return initialState;
        },
    },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
