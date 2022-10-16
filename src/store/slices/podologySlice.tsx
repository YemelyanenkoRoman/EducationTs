import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CardData } from '../../types/types';
import { api } from '../../api/api';

interface PodologyState {
  card: CardData[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: PodologyState = {
  card: [],
  status: 'idle',
};

const cardsApiProps = 'podologyData';

export const fetchPodology = createAsyncThunk('podologyCards/fetchPodology', async function (_, { rejectWithValue }) {
  try {
    return await api.loadCardsData(cardsApiProps);
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const podologySlice = createSlice({
  name: 'podologyCards',
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPodology.pending, (state, action) => {
      state.status = 'pending';
      state.error = undefined;
    });

    builder.addCase(fetchPodology.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.card = action.payload;
    });
    builder.addCase(fetchPodology.rejected, (state, action) => {
      state.status = 'failed';
      console.log(action.payload);
      state.error = action.payload as string;
    });
  },
});

export default podologySlice.reducer;
