import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    users: [
        {id: 1, login: 'admin', password: '1111'},
        {id: 2, login: 'vova', password: 'qweasd'},
        {id: 3, login: 'vita', password: 'qazxsw'},
    ]
};

const userSlice = createSlice({
    name: 'userSlice',

    initialState,

    reducers: {
        addUser: ((state, action) => {
            state.users.push({
                id: new Date().getTime(),
                login: action.payload.login,
                password: action.payload.password
            })
        })
    }
});

const userReduser = userSlice.reducer;
export default userReduser;
export const {addUser} = userSlice.actions;