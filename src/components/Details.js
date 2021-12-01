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
        <div className={styles.container}>
            {product &&
            <>
                <img src={product.image} alt={product.title} className={styles.image} />

                <div className={styles.description}>
                    
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p className={styles.category}><span>Category:</span> {product.category}</p>

                    <div>
                        <p className={styles.price}>{product.price} $</p>
                        <Link to='/store' className={styles.link}>Back to shop</Link>
                    </div>
                    
                </div>
            </>
            }
        </div>
    );
};

export default Details;