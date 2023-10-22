import {createSlice} from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name:'cards',
    initialState:{
        cards:[] as Array<Card>
    },
    reducers:{
        setReduxCards(state,action){
            state.cards = action.payload;
        }
    }
})

export const {setReduxCards} = cardSlice.actions;
export default cardSlice.reducer;