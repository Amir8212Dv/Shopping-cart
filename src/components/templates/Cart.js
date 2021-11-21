import React, { useContext } from 'react';
// CSS :
import styles from '../../styles/Cart.module.css'
// Context :
import { Context } from '../../App';
// Trash icon :
import Trash from '../../icons/trash.svg'
// method :
import  textSplite  from '../../helper/textSplite';


const Cart = ({count , product , product : {title , id , image , price}}) => {

    const {counter} = useContext(Context)
    
    const clickHandler = type => {
        counter(type , id , product)
    }
    
    const productTitle = textSplite(title)


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
                    <button onClick={() => clickHandler('REMOVE')} className={styles.trash_btn}><img src={Trash} alt='trash-icon' /></button>
                :   
                    <button onClick={() => clickHandler('DECREASE')} className={styles.decrease_btn}>-</button>
                }
                <button onClick={() => clickHandler('INCREASE')} className={styles.increase_btn}>+</button>
            </div>
        </div>
    );
};

export default Cart;