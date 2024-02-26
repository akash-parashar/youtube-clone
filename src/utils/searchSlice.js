import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState: {
    },
    reducers:{
        cacheResults:(state,action)=>{
            state = Object.assign(state, action.payload);
        }
    }
})
export  const {cacheResults} = searchSlice.actions;
export  default searchSlice.reducer;

//This function is used to make a request to the server and get data for the search