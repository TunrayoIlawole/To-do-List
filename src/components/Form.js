import React from 'react';

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit = {handleSubmit}>
            <h2 className = "label-wrapper">
                <label htmlFor = "new-todo-item" className = "label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input 
                type = "text"
                id = "new-todo-item"
                className = "input input__lg"
                name ="text"
                autocomplete = "off" 
            />
            <button type = "submit" className = "btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
};

export default Form;