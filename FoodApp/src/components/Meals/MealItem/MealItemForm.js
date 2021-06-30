import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = props => {

    const amountInputRef = useRef();
    const [amountValidity, setAmountValidity] = useState(true);
    const formSubmitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            return;
        }

        props.onAddToCart(enteredAmountNumber);

    }

    return (
        <form className={styles.form} onSubmit={formSubmitHandler} >
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!amountValidity && <p>Please enter a valid amount(1-5)!</p>}
        </form>
    );
}

export default MealItemForm;