import React from 'react';

const Form = ({ submitHandler }) => (
    <form className="form" onSubmit={submitHandler}>
        <div className="form__group">
            <select className="select-field">
                <option value="income">+</option>
                <option value="expense">-</option>
            </select>
        </div>
        <div className="form__group">
            <input type="text" className="input-field input-field--description" placeholder="add description" />
        </div>

        <div className="form__group">
            <input type="number" className="input-field input-field--money" placeholder="add money" />
        </div>

        <div className="form__group">
            <button type="submit" className="form__button">
                <i className="fa fa-check"></i>
            </button>
        </div>
    </form>

);
export default Form;