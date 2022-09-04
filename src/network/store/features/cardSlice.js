import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { baseService } from '../../services/baseService';

export const fetchCards = createAsyncThunk('cards/fetchPosts', async () => {
    let carsWithMechanics=[]
    try {
        const response = await baseService.get('/cards')
        for (const card in response) {
            response[card].forEach(element => {
              if (element.mechanics) {
                carsWithMechanics.push(element)
              }
            });
          }
    } catch (error) {
        console.log('Get Cards Error', error)
    }
    return carsWithMechanics;
  });

const initialState = {
    cards : [],
    status : 'idle'
}
export const cardSlice = createSlice({
    name : 'cards',
    initialState,
    reducers:{
      changeStatus : (state) => {
        state.status = 'succeeded'
    },
    },
    extraReducers(builder) {
        builder
        .addCase(fetchCards.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchCards.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.cards = state.cards.concat(action.payload)
        })
    }
})
export const getAllCards = (state) => state.cards.cards
export const getStatus = (state) => state.cards.status

export const {changeStatus} = cardSlice.actions

export default cardSlice.reducer