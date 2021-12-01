const productsCount = new Map()
const initialValue = {
    products : [],
    map : new Map()
}

const reducer = (state=initialValue , action) => { // i don't use this function as reducer method , because of then my component will render twice when that called from Cart component
        
    switch(action.type) {
        case 'FETCH_PRODUCTS': 
            return {...state , products : action.data}


        case 'ADD':
            productsCount.set(action.id , {count : 1 , data : action.data})
            return {...state , map : productsCount}

        case 'INCREASE':
            productsCount.set(action.id , {count : (productsCount.get(action.id)).count + 1 , data : action.data})
            return {...state , map : productsCount}

        case 'DECREASE':
            productsCount.set(action.id , {count : (productsCount.get(action.id)).count - 1 , data : action.data})
            return {...state , map : productsCount}

        case 'REMOVE' :
            productsCount.delete(action.id)
            return {...state , map : productsCount}

        case 'CLEARE':
            productsCount.clear()
            return {...state , map : productsCount}

        default:
            return state
        }
}

export default reducer