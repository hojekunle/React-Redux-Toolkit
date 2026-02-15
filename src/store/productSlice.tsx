import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchProducts(state, action){
            //reducer doesnt support async functions hence we make the call outside
            state.data = action.payload; //retrieve items from the dispatch method of getProducts function
        }
    }
});

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export function getProducts(){
    //create Thunk creator
    try{
        return async function getProductsThunk(dispatch, getState){
        const data = await fetch("https://fakestoreapi.com/products");
        const result = await data.json();
        dispatch(fetchProducts(result));
    }
    } catch (error) {
            console.error("Failed to fetch products:", error);
    }
}