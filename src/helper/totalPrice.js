const totalPrice = map => {
    // const values = Array.from( map.values() );
    const totalPrice = Array.from( map.values()).reduce((prev , cur) => {
        return prev + (cur.data.price * cur.count)
    } , 0)
    return totalPrice.toFixed(2)
}
export default totalPrice