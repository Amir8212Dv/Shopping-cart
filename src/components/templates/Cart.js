import React from 'react';
// CSS :
import styles from '../../styles/Cart.module.css'
// Trash icon :
import Trash from '../../icons/trash.svg'
// method :
import  textSplite  from '../../helper/textSplite';
// Redux Actions
import { increaseProduct , decreaseProduct , removeProduct } from '../redux/count/productsAction';
// Redux
import { useDispatch } from 'react-redux';


const Cart = ({count , product ,  product : {title , id , image , price} }) => {
    
    const productTitle = textSplite(title)

    const dispatch = useDispatch()


    return (
        <div className={styles.container}>
            <img src={image} alt={title} className={styles.image} />
            
            <div className={styles.details}>
                <p className={styles.title}>{productTitle}</p>
                <p className={styles.price}>{price} $</p>
            </div>

            <p className={styles.count} > {count} </p>
            
            <div className={styles.btn_container}>
                {count === 1 
                ?
                    <button onClick={() => dispatch(removeProduct(id))} className={styles.trash_btn}><img src={Trash} alt='trash-icon' /></button>
                :   
                    <button onClick={() => dispatch(decreaseProduct(id , product))} className={styles.decrease_btn}>-</button>
                }
                <button onClick={() => dispatch(increaseProduct(id , product))} className={styles.increase_btn}>+</button>
            </div>
        </div>
    );
};

export default Cart;