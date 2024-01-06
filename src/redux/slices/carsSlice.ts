import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 123,
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {

    },
})

export default carsSlice.reducer