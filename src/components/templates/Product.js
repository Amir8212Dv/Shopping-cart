import React  from 'react';
import {Link} from 'react-router-dom'
// CSS :
import styles from '../../styles/Product.module.css'
// Icon :
import Trash from '../../icons/trash.svg'
// method :
import textSplite  from '../../helper/textSplite';
// Redux Actions
import { addProduct , increaseProduct , decreaseProduct , removeProduct } from '../redux/count/productsAction';
// Redux
import { useDispatch, useSelector } from 'react-redux';


const Product = ({product , product:{id , title , image , price}}) => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const keys = Array.from(state.map.keys())


    const productTitle = textSplite(title)


    return (
        <div className={styles.container}>
            <img src={image} alt={productTitle} className={styles.image}/>

            <div className={styles.description}>
                <p className={styles.title}>{productTitle}</p>
                <p className={styles.price}>{price} $</p>
            </div>

            <div className={styles.bottom}>
                <Link to={`/details/${id}`}>Details</Link>

                {keys.includes(id)
                ?
                    <div className={styles.btn_container}>

                        {state.map.get(id).count === 1
                        ?
                            <button onClick={() => dispatch(removeProduct(id))} className={styles.trash_btn}><img src={Trash} alt='trash-icon' /></button>
                        :
                            <button onClick={() => dispatch(decreaseProduct(id , product))} className={styles.decrease_btn}>-</button>
                        }

                        <p className={styles.count}>{state.map.get(id).count}</p>
                        <button onClick={() => dispatch(increaseProduct(id , product))} className={styles.increase_btn}>+</button>
                    </div>
                :
            <div> <button onClick={() => dispatch(addProduct(id , product))} className={styles.first_btn}>Add to cart</button> </div>
            }

            </div>

        </div>
    );
};

export default Product;