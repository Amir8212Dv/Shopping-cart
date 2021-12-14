import React from 'react';
// CSS :
import styles from '../styles/Store.module.css'
// Component :
import Product from './templates/Product';
// Redux
import { useDispatch, useSelector } from 'react-redux';


const Store = () => {

    const state = useSelector(state => state)
    console.log('a' , state.map)
    const dispatch = useDispatch()
    
    return (
        <div className={styles.container}> 

            {state.products.map(product => <Product product={product}  dispatch={dispatch} key={product.id} />)}

        </div>
    );
};

export default Store;




