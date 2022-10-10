import { createSlice } from '@reduxjs/toolkit';
import { CardData } from '../../types/types';
import { pedicureData } from '../../pages/pedicure/pedicureData';

interface PedicureState {
  card: CardData[];
}

const initialState: PedicureState = {
  card: [],
};

// Обязательный параметр name - уникальный идентификатор, initialState
export const pedicureSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    loadPedicureData(state) {
      state.card = pedicureData;
    },
  },
});

export const { loadPedicureData } = pedicureSlice.actions;

export default pedicureSlice.reducer;
