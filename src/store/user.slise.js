import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    users: [
        // {id:1, email: 'www@gmail.com', password: 'qweasd'}
    ]
}

const userSlice = createSlice({
    name: 'userSlice',

    initialState,

    reducers: {
        addUser: ((state, action) => {
            state.users.push({
                id: new Date().getTime(),
                email: action.payload.email,
                password: action.payload.password
            })
        })

    }
});

const userReduser = userSlice.reducer;
export default userReduser;
export const {addUser} = userSlice.actions;