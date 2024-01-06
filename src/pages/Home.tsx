import React, {FC} from 'react';
import {useAppSelector} from "../redux/store";

const Home: FC = () => {
    const {value} = useAppSelector((state) => state.cars)

    return (
        <div>
            {value} машины
        </div>
    );
};

export default Home;
