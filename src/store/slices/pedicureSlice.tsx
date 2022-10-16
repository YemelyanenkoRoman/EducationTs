import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import { CardData } from '../../types/types';

interface PedicureState {
  card: CardData[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: PedicureState = {
  card: [],
  status: 'idle',
};

const cardsApiProps = 'pedicureData';

export const fetchPedicure = createAsyncThunk('pedicureCards/fetchPedicure', async function (_, { rejectWithValue }) {
  try {
    return await api.loadCardsData(cardsApiProps);
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const pedicureSlice = createSlice({
  name: 'pedicureCards',
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPedicure.pending, (state, action) => {
      state.status = 'pending';
      state.error = undefined;
    });

    builder.addCase(fetchPedicure.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.card = action.payload;
    });
    builder.addCase(fetchPedicure.rejected, (state, action) => {
      state.status = 'failed';
      console.log(action.payload);
      state.error = action.payload as string;
    });
  },
});

export default pedicureSlice.reducer;
