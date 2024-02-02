import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: { 
        showGptSearch :  false,
        gptMoviesName: [],
        searchedMoviesResult: []
    },
    reducers : {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },

        addGptMoviesResult: (state, action) => { 
            const {moviesName, moviesResult} = action.payload;
            state.gptMoviesName = moviesName;
            state.searchedMoviesResult = moviesResult;
        }
    }
});

export const { toggleGptSearchView, addGptMoviesResult } = gptSlice.actions;

export default gptSlice.reducer