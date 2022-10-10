import { createSlice } from '@reduxjs/toolkit';
import { CardData } from '../../types/types';
import { podologyData } from '../../pages/podology/podologyData';

interface PodologyState {
  card: CardData[];
}

const initialState: PodologyState = {
  card: [],
};

// Обязательный параметр name - уникальный идентификатор, initialState
export const podologySlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    loadPodologyData(state) {
      state.card = podologyData;
    },
  },
});

export const { loadPodologyData } = podologySlice.actions;

export default podologySlice.reducer;
