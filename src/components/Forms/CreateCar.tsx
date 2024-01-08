import React, {useState} from 'react';

const CreateCar = () => {
    const [formValue, setFormValue] = useState('')

    type LoginFormFields = {
        name: string
    }

    type FormField = {
        name: HTMLInputElement
    }

    const onSubmit = (formFields: LoginFormFields) => {
        setFormValue(formFields.name);
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement & FormField> = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const { name } = form;

        onSubmit({name: name.value});
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Отправить" />
            </form>
            <p>{formValue}</p>
        </>
    );
};

export default CreateCar;
