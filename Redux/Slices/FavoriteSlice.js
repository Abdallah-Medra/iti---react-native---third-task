import { createSlice } from '@reduxjs/toolkit';
const favoriteSlice = createSlice({
    name: "favorite",
    initialState: { favorite: [] },
    reducers: {
        addToFavorite: (state, action) =>
        {
            console.log('push in favorite')
            state.favorite.push(action.payload);
        }
    }
})

export const { addToFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;

