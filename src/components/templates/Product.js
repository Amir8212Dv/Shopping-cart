import React , {useContext}  from 'react';
import {Link} from 'react-router-dom'
// CSS :
import styles from '../../styles/Product.module.css'
// Icon :
import Trash from '../../icons/trash.svg'
// Context :
import { Context } from '../../App';
// method :
import textSplite  from '../../helper/textSplite';




const Product = ({product , product:{id , title , image , price} }) => {

    const {counter , map } = useContext(Context)

    const a = Array.from(map.keys())

    const clickHandler = type => {
        counter(type , id , product)
    }

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

                {a.includes(id)
                ?
                    <div className={styles.btn_container}>

                        {map.get(id).count === 1
                        ?
                            <button onClick={() => clickHandler('REMOVE')} className={styles.trash_btn}><img src={Trash} alt='trash-icon' /></button>
                        :
                            <button onClick={() => clickHandler('DECREASE')} className={styles.decrease_btn}>-</button>
                        }

                        <p className={styles.count}>{map.get(id).count}</p>
                        <button onClick={() => clickHandler('INCREASE')} className={styles.increase_btn}>+</button>
                    </div>
                :
            <div> <button onClick={() => clickHandler('ADD')} className={styles.first_btn}>Add to cart</button> </div>
            }

            </div>

        </div>
    );
};

export default Product;