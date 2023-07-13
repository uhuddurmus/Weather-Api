import { configureStore } from '@reduxjs/toolkit';
import cityReducer, { fetchCityOptions } from './cityReducer';
import { useDispatch } from 'react-redux';
import weatherReducer, { fetchForecastData, fetchWeatherData } from './weatherReducer';

const store = configureStore({
  reducer: {
    city: cityReducer,
    weather: weatherReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
store.dispatch(fetchForecastData('')); // İsteği tetikleme
store.dispatch(fetchWeatherData('')); // İsteği tetikleme
store.dispatch(fetchCityOptions('')); // İsteği tetikleme



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
