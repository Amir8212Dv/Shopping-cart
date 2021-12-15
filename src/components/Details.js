import React , {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
// CSS :
import styles from '../styles/Details.module.css'
// Reudx
import { useSelector } from 'react-redux';



const Details = ({match}) => {

    const products = useSelector(state => state.products)

    const [product , setProduct] = useState()
    
    useEffect(() => {
        setProduct(products[match.params.id - 1])
    } , [products, match.params.id])
        
 
    return (
        <div className={`container d-flex justify-content-between align-item-center ${styles.container}`}>
            {product &&
            <>
                <img src={product.image} alt={product.title} className={styles.image} />

                <div className={` w-50 p-3 ${styles.description}`}>
                    
                    <p className={`h3 ${styles.title}`}>{product.title}</p>
                    <p>{product.description}</p>
                    <p className={`h6 mb-4 ${styles.category}`}><span>Category:</span> {product.category}</p>

                    <div className='d-flex justify-content-between align-item-center '>
                        <p className={styles.price}>{product.price} $</p>
                        <Link to='/store' className={`rounded text-white ${styles.link}`}>Back to shop</Link>
                    </div>
                    
                </div>
            </>
            }
        </div>
    );
};

export default Details;