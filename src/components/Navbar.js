import React from 'react';
import { Link } from 'react-router-dom';
// CSS :
import styles from '../styles/Navbar.module.css'
// Cart icon :
import ShopIcon from '../icons/shop.svg'



const Navbar = ({count}) => {
    
    const cartCount = count < 100 ? count : '+99'

    return (
        <div className={styles.container}>
            
            <Link to='/store' className={styles.product}>Products</Link>

            <Link to='/cart' 
            className={styles.cart}>
                <img src={ShopIcon} alt='shop-icon' />
                <p className={cartCount==='+99' ? styles.highCount : undefined}>{cartCount}</p>
            </Link>

        </div>
    );
};

export default Navbar;