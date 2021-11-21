import React from 'react';
// CSS :
import styles from '../styles/Store.module.css'
// Component :
import Product from './templates/Product';



const Store = ({products}) => {

    return (
        <div className={styles.container}> 

            {products.map(product => <Product product={product} key={product.id} />)}

        </div>
    );
};

export default Store;




