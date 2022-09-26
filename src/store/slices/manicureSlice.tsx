import { createSlice } from '@reduxjs/toolkit';
import { CardData } from '../../types/types';
import { manicureData } from '../../pages/manicure/manicureData';

interface ManicureState {
  card: CardData[];
}

const initialState: ManicureState = {
  card: [],
};

// Обязательный параметр name - уникальный идентификатор, initialState
export const manicureSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    loadManicureData(state) {
      state.card = manicureData;
    },
  },
});

export const { loadManicureData } = manicureSlice.actions;

export default manicureSlice.reducer;
