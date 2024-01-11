import React, {FC} from 'react';
import {Car} from "../../redux/slices/carsSlice";
import CarView from "../CarView/CarView";
import styles from "./Cars.module.css"

interface CarsProps {
    cars: Car[],
}

const Cars: FC<CarsProps> = ({cars}) => {
    return (
        <>
            <h1 className='text-center text-xl my-2'>Машины</h1>
            <div className={styles.cars}>
                {cars?.map((elem) => (
                    <CarView elem={elem}/>
                ))}
            </div>
        </>

    );
};

export default Cars;
