import React, {FC, useEffect} from 'react';
import {RootState, useAppDispatch, useAppSelector} from "../redux/store";
import {fetchCars} from "../redux/slices/carsSlice";
import Cars from "../components/Cars/Cars";

const Home: FC = () => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector((state: RootState) => state.cars);

    const getCars = async () => {
        dispatch(fetchCars());
    }

    useEffect(() => {
        getCars();
    }, []);

    return (
        <>

            <Cars cars={cars}/>
        </>
    );
};

export default Home;
