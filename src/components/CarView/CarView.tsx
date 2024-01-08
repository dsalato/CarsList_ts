import React, {FC} from 'react';
import {Car} from "../../redux/slices/carsSlice";
import styles from './CarView.module.css';

interface CarProps {
    elem: Car,
}

const drives: { [key: string]: string } = {
    'awd': 'Полный привод',
    'fwd': 'Передний привод',
    'rwd': 'Задний привод'
};

const CarView: FC<CarProps> = ({elem}) => {
    return (
        <div className={styles.car}>
            <h1 className="text-green-400 text-xl">{elem.make} {elem.model}</h1>
            <p className="my-1">{elem.class}</p>
            <p className="my-1 text-right" >{elem.year}</p>
            <p className="my-1 text-right">{drives[elem.drive]}</p>
        </div>
    );
};

export default CarView;
