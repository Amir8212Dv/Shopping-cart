import React , {useEffect} from 'react';
import { Route , Switch , Redirect } from 'react-router-dom'
import axios from 'axios';
// Components
import Store from './components/Store';
import Details from './components/Details'
import Carts from './components/Carts';
import Navbar from './components/Navbar';

import { useDispatch  } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

const App = () => {
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        const fetchAPI = async () => {
            const products = await axios.get('https://fakestoreapi.com/products')
            dispatch({type : 'FETCH_PRODUCTS' , data : products.data})
        }
        fetchAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])

    
    return (
        <div className='container-fluid'>
            <Navbar />
            <Switch>
                <Route path='/store' component={Store}/>

                <Route path='/cart' component={Carts}/>
                            
                <Route path='/details/:id' component={Details} />
                    
                <Redirect from='/' to='/store' />
                        
            </Switch>
          </div>  
        
    );
};

export default App;