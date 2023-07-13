import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CityState {
  cityName: any;
  cityOptions: any[];
}

const initialState: CityState = {
  cityName: '',
  cityOptions: [],
};

export const fetchCityOptions = createAsyncThunk(
  'city/fetchCityOptions',
  async (inputValue: any) => {
    const response = await axios.get(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputValue}`,
      {
        headers: {
          'X-RapidAPI-Key': '60fb3940dbmshe428262047ff84bp109326jsn97c6aa48976c',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        },
      }
    );

    return response.data.data?.map((city: any) => ({
      value: `${city.latitude} ${city.longitude}`,
      label: `${city.name}, ${city.countryCode}`,
    }));
  }
);



const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCityName: (state, action: PayloadAction<any>) => {
      state.cityName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCityOptions.fulfilled, (state, action) => {
      state.cityOptions = action.payload;
    });
    builder.addCase(fetchCityOptions.rejected, (state) => {
      state.cityOptions = [];
    });
  },
});

export const { setCityName } = citySlice.actions;
export default citySlice.reducer;