import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components :
import Cart from './templates/Cart'
// Methods :
import totalCount from '../helper/totalCount';
import totalPrice from '../helper/totalPrice';
// Css :
import styles from '../styles/Carts.module.css'
// Redux Actions
import { cleareProducts } from './redux/count/productsAction';
// Redux
import { useDispatch, useSelector } from 'react-redux';


const Carts = () => {

    const [isCheckOut , setIsCheckout] = useState(false)

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const values = Array.from( state.map.values() );

    const totalP = totalPrice(state.map)
    const totalC = totalCount(state.map)
    


    return (
        <div>

            {isCheckOut 
            ?
                <div className={styles.checkout}>
                    <p>Checkouted successfully</p>
                    <Link to='/store'>Back to shop</Link>
                </div> 
            :
                <div className={styles.container}>
                    <div>
                        {values.map(p =>  <Cart product={p.data} count={p.count} key={p.data.id} />)}
                    </div>

                        {totalC 
                        ?
                            <div className={styles.data}>
                                <p><span>total items : </span> {totalC}</p>
                                <p><span>total payment : </span> {totalP} $</p>

                                <div className={styles.btn_container}>
                                    <button onClick={() => {
                                        dispatch({type : 'CLEARE'})
                                        }} className={styles.clear}>clear</button>

                                    <button onClick={() => {
                                        setIsCheckout(true)
                                        dispatch(cleareProducts())
                                        }} className={styles.checkout_btn}>checkout</button>
                                </div>
                                
                            </div>
                        
                        : 
                            <div className={styles.empty}>
                                <p>Cart is empty</p>
                                <Link to='/store' >Go to Shop</Link>
                            </div>
                        }
                </div> 
            }
        </div>
    );
};

export default Carts;