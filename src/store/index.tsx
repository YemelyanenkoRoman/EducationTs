import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import manicureSlice from './slices/manicureSlice';
import pedicureSlice from './slices/pedicureSlice';
import podologySlice from './slices/podologySlice';

//Главный reducer который объединяет остальные редьюсеры
const rootReducer = combineReducers({
  manicure: manicureSlice,
  pedicure: pedicureSlice,
  podology: podologySlice,
});

// Общее хранилище.
// Как параметр туда передаем объект где мы будем регистрировать уже остальные редьюсеры.
export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

// Утилита говорит о том: сделай мне типы которые аозвращает в итоге мне ф-ция:
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
