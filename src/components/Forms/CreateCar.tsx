import React, {useState} from 'react';
import {RootState, useAppDispatch, useAppSelector} from "../../redux/store";
import {postAddCar} from "../../redux/slices/carsSlice";
import {useNavigate} from "react-router-dom";

const CreateCar = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const [value, setValue] = useState({make: '', model: '', classCar: '', year: '', drive: ''});

    const handleInput: React.ChangeEventHandler<HTMLInputElement> &  React.ChangeEventHandler<HTMLSelectElement>  = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        dispatch(postAddCar(value));
        console.log(value);
        // setTimeout(()=>{
        //     navigate('/');
        // },2000)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Марка:
                    <input type="text" name="make" value={value.make} onChange={handleInput}/>
                </label>
                <label>
                    Модель:
                    <input type="text" name="model" value={value.model} onChange={handleInput}/>
                </label>
                <label>
                    Класс:
                    <input type="text" name="classCar" value={value.classCar} onChange={handleInput}/>
                </label>
                <label>
                    Год:
                    <input type="text" name="year" value={value.year} onChange={handleInput}/>
                </label>
                <label>
                    Привод:
                    <select name="drive" value={value.drive} onChange={handleInput} >
                        <option>-- Выберите привод --</option>
                        <option value="awd">Полный привод</option>
                        <option value="rwd">Задний</option>
                        <option value="fwd">Передний</option>
                    </select>
                </label>
                <input type="submit" value="Отправить"/>
            </form>
        </>
    );
};

export default CreateCar;
