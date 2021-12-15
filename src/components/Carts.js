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
                    <Link to='/store' className='d-block mx-auto p-2 rounded'>Back to shop</Link>
                </div> 
            :
                <div className={`d-flex justify-content-between  ${styles.container}`}>
                        {totalC 
                        ?
                            <div className={` ${styles.data}`}>
                                <p><span>total items : </span> {totalC}</p>
                                <p><span>total payment : </span> {totalP} $</p>

                                <div className={`d-flex justify-content-between align-items-center mt-5 mb-4`}>
                                    <button onClick={() => {
                                        dispatch({type : 'CLEARE'})
                                        }} className={styles.clear}>clear</button>

                                    <button onClick={() => {
                                        setIsCheckout(true)
                                        dispatch(cleareProducts())
                                        }} className={`rounded p-2 me-3 border-0 text-white  ${styles.checkout_btn}`}>checkout</button>
                                </div>
                                
                            </div>
                        
                        : 
                            <div className={ `d-flex flex-column flex-wrap mx-auto ${styles.empty}`}>
                                <p className='w-100 '>Cart is empty</p>
                                <Link to='/store' className='mx-auto text-white py-2 px-3 rounded'>Go to Shop</Link>
                            </div>
                        }

                    <div className={styles.carts}>
                        {values.map(p =>  <Cart product={p.data} count={p.count} key={p.data.id} />)}
                    </div>
                </div> 
            }
        </div>
    );
};

export default Carts;