import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action){
            //the immer library is inbuilt in Redux Toolkit and it ensures state is updated in an immutable manner
            state.push(action.payload)
        },
        remove(state, action){
            //filter keep items satisfy the condition in the state and deletes others. For a given dispatch(remove(2)), action.payload is 2
            return state.filter(item => item.id !== action.payload)
        }
    }
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;