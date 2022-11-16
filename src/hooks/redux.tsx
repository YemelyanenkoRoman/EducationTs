// В этой папке мы храним кастомные хуки которые мы делаем:

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

// Мы используюем нативный useDispatch который есть в тулките
// но мы его типизируем и говорим с какими данными он работает используя дженерик <AppDispatch>
export const useAppDispatch = () => useDispatch<AppDispatch>();

// C gjvjom. useAppSelector мы достаём определённые вещи из стейта, у него есть специальный тип TypedUseSelectorHook,
// он работает с <RootState> - который мы импортируем из нашего стора и это всё равно useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
