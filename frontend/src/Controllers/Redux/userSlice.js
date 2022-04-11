import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: "user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Harry potter"})
            state.push({name:"johnny test"})
        }
    }
})

export default slice.reducer;
export const{getUser} = slice.actions;
