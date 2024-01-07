import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchCars = createAsyncThunk(
    'cars/fetchCars',
    async () => {
        const {data} = await axios.get<Car[]>(`https://65994c30a20d3dc41cef8603.mockapi.io/cars`);
        return data;
    }
)

interface carsState {
    cars: Car[]
}

type Car = {
    "city_mpg": number,
    "class": string,
    "combination_mpg": number,
    "cylinders": number,
    "displacement": number,
    "drive": string,
    "fuel_type": string,
    "highway_mpg": number,
    "make": string,
    "model": string,
    "transmission": string,
    "year": number
}

const initialState: carsState = {
    cars: []
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.cars = action.payload
        })
    }
})

export default carsSlice.reducer