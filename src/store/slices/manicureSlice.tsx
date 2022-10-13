import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import { CardData } from '../../types/types';

interface ManicureState {
  card: CardData[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: ManicureState = {
  card: [],
  status: 'idle',
};

export const fetchManicure = createAsyncThunk('manicureCards/fetchManicure', async function (_, { rejectWithValue }) {
  try {
    return await api.loadManicureData();
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const manicureSlice = createSlice({
  name: 'manicureCards',
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchManicure.pending, (state, action) => {
      state.status = 'pending';
      state.error = undefined;
    });

    builder.addCase(fetchManicure.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.card = action.payload;
    });
    builder.addCase(fetchManicure.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload as string;
    });
  },
});

export default manicureSlice.reducer;
