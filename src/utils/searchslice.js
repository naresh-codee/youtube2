import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({

    name:"search",
    initialState:{

    },
    reducers:{
        addSearch:(state) =>{
            
        }

    }
    
    
});

export const {addSearch} = searchSlice.actions;
export default searchSlice.reducer;