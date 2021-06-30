import React, { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';

const HeaderCartButton = props => {

    const [btnHighlight, setBtnHighlight] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const btnClasses = `${styles.button} ${btnHighlight ? styles.bump : ''}`;

    const cartItemNo = items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0)

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnHighlight(true);
        const timer = setTimeout(() => {
            setBtnHighlight(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    },[items])

    return (
        <button className={btnClasses} onClick={props.onClick} >
            <span className={styles.icon} >
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge} >
                {cartItemNo}
            </span>
        </button>

    );
}

export default HeaderCartButton;