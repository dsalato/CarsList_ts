import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchCars = createAsyncThunk(
    'cars/fetchCars',
    async () => {
        const {data} = await axios.get<Car[]>(`https://65994c30a20d3dc41cef8603.mockapi.io/cars`);
        return data;
    }
)

export const postAddCar = createAsyncThunk(
    'cars/postAddCar',
    async (values: Car) => {
        return fetch(`https://65994c30a20d3dc41cef8603.mockapi.io/cars`, {
            method: 'POST',
            headers: { Accept:'application/json', 'Content-Type':'application/json'},
            body: JSON.stringify({
                classCar: values.classCar,
                drive: values.drive,
                make: values.make,
                model: values.model,
                year: values.year
            })
        }).then((res) => res.json());

    }
)


interface carsState {
    cars: Car[],
}

export type Car = {
    "classCar": string,
    "drive": string,
    "make": string,
    "model": string,
    "year": string
}

const initialState: carsState = {
    cars: [],
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.cars = action.payload;
        })

        builder.addCase(postAddCar.fulfilled, (state, action) => {
            state.cars = [];
        })
    }
})

export default carsSlice.reducer