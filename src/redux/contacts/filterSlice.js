import { createSlice } from "@reduxjs/toolkit"

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {value:''},
    reducers:{
        addFilter: (state, action) => {
                state.value = action.payload
        }
    }
})

export const { addFilter } = filterSlice.actions

export const getFilter = (state) => state.filter.value

export const filterReducer = filterSlice.reducer