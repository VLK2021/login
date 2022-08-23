import {configureStore} from "@reduxjs/toolkit";

import userReduser from "./user.slise";


const store = configureStore({
    reducer: {
        user: userReduser
    }
});
export default store;