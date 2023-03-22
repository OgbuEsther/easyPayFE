import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

interface AdminData {
    name: string;
    email: string;
    password: string;
}

const initialState = {
    currentUser: {} as AdminData | null
}

const ReduxState = createSlice({
    name: "easypays",
    initialState,
    reducers: {
        loginAdmin: (state, { payload }: PayloadAction<AdminData>) => {
            state.currentUser = payload
        },

        logoutAdmin: (state) => {
            state.currentUser = null
        }
    }
})

export const { loginAdmin, logoutAdmin } = ReduxState.actions;

export default ReduxState.reducer