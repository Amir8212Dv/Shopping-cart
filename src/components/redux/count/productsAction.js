
export const addProduct = (id , data) => {
    return {
        type : 'ADD',
        id : id,
        data : data
    }
}

export const increaseProduct = (id , data) => {
    return {type : 'INCREASE' , id : id , data : data}
}

export const decreaseProduct = (id , data) => {
    return {type : 'DECREASE' , id : id , data : data}
}

export const removeProduct = id => {
    return {type : 'REMOVE' , id : id}
}

export const cleareProducts = () => {
    return {type : 'CLEARE'}
}

