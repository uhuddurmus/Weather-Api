import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface weather {
    currentWeather: any;
    currentForecast: any;
}

const initialState: weather = {
    currentWeather: null,
    currentForecast: null,
};

export const fetchWeatherData = createAsyncThunk(
    'weather/fetchWeatherData',
    async (coordinates: string) => {
      console.log("coordinates",coordinates)
      const [lat, lon] = coordinates.split(" ");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=key&units=metric&lang=tr`
      );
  
      return response.data;
    }
  );

  export const fetchForecastData = createAsyncThunk(
    'weather/fetchForecastData',
    async (coordinates: string) => {
      const [lat, lon] = coordinates.split(" ");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=key&units=metric&lang=tr`
      );
  
      return response.data;
    }
  );


const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentWeather: (state, action: PayloadAction<any>) => {
      state.currentWeather = action.payload;
    },
    setCurrentForecast: (state, action: PayloadAction<any>) => {
        state.currentForecast = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.currentWeather = action.payload;
    });
    builder.addCase(fetchWeatherData.rejected, (state) => {
      state.currentWeather = null;
    });
    builder.addCase(fetchForecastData.fulfilled, (state, action) => {
        state.currentForecast = action.payload;
      });
      builder.addCase(fetchForecastData.rejected, (state) => {
        state.currentForecast = null;
      });
  },
  
});

export const { setCurrentWeather ,  setCurrentForecast} = weatherSlice.actions;
export default weatherSlice.reducer;