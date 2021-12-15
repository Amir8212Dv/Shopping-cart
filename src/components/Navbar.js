import React from 'react';
import { Link } from 'react-router-dom';
// CSS :
import styles from '../styles/Navbar.module.css'
// Cart icon :
import ShopIcon from '../icons/shop.svg'
// Reudx
import { useSelector } from 'react-redux';


const Navbar = () => {

    const state = useSelector(state => state)
    
    
    const count = Array.from(state.map.values()).reduce((prev , cur) => {
        return prev + cur.count
    } , 0)
    

    return (
        <div className={`d-flex justify-content-between align-items-center mb-5 w-100 bg-white shadow-lg ${styles.container}`}>
            
            <Link to='/store' className={` ${styles.product}`}>Products</Link>

            <Link to='/cart' 
            className={`${styles.cart}`}>
                <img src={ShopIcon} alt='shop-icon' />
                <p className='rounded-circle'>{count}</p>
            </Link>

        </div>
    );
};

export default Navbar;