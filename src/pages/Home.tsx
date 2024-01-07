import React, {FC, useEffect} from 'react';
import {RootState, useAppDispatch, useAppSelector} from "../redux/store";
import {fetchCars} from "../redux/slices/carsSlice";

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
        <div>
            {cars?.map((elem) => (
                <p key={elem.city_mpg}>{elem.model}</p>
            ))}
        </div>
    );
};

export default Home;
