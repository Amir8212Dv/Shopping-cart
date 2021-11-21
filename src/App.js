import React , {useState , useEffect , useReducer} from 'react';
import { Route , Switch , Redirect } from 'react-router-dom'
import axios from 'axios';
import totalCount from './helper/totalCount';
// Components
import Store from './components/Store';
import Details from './components/Details'
import Carts from './components/Carts';
import Navbar from './components/Navbar';


export const Context = React.createContext()

const productsCount = new Map()


const App = () => {
    
    
    const reduce = (state) => {return {...state}}

    const [products , setProducts] = useState([])
    
    // API
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data))
    } , [])
    

    const setCounts = (action , id , data) => { // i don't use this function as reducer method , because of then my component will render twice when that called from Cart component
        
        switch(action) {
            case 'ADD':
                productsCount.set(id , {count : 1 , data : data})
                break

            case 'INCREASE':
                productsCount.set(id , {count : (productsCount.get(id)).count + 1 , data : data})
                break

            case 'DECREASE':
                productsCount.set(id , {count : (productsCount.get(id)).count - 1 , data : data})
                break

            case 'REMOVE' :
                productsCount.delete(id)
                break

            case 'CLEARE':
                productsCount.clear()
                break

            default:
                break
            }
        productCounter()
    }
    
    // eslint-disable-next-line no-unused-vars
    const [data , productCounter] = useReducer(reduce , {})
 
    return (
        <div>
            <Context.Provider value={{ counter : setCounts , map : productsCount}}>
                <Navbar count={totalCount(productsCount)} />
                <Switch>
                    <Route exact path='/store' render={() =><Store  products={products} /> }/>

                    <Route path='/cart' render={() => <Carts />}/>
                            
                    <Route path='/details/:id' render={props => <Details products={products}  {...props} />} />
                    
                    <Redirect from='/' to='/store' />
                        
                </Switch>
            </ Context.Provider> 
            
        </div>
    );
};

export default App;