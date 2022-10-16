import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DataSliderItem } from '../../types/types';
import { api } from '../../api/api';

interface ManicureState {
  slider: DataSliderItem[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: ManicureState = {
  slider: [],
  status: 'idle',
};

const cardsApiProps = 'dataSlider';

export const fetchMain = createAsyncThunk('main/fetchMain', async function (_, { rejectWithValue }) {
  try {
    return await api.loadCardsData(cardsApiProps);
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const mainSlice = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchMain.pending, (state, action) => {
      state.status = 'pending';
      state.error = undefined;
    });

    builder.addCase(fetchMain.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.slider = action.payload;
    });
    builder.addCase(fetchMain.rejected, (state, action) => {
      state.status = 'failed';
      console.log(action.payload);
      state.error = action.payload as string;
    });
  },
});

export default mainSlice.reducer;
