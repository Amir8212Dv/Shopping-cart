const totalCount = map => {
    const total = Array.from(map.values()).reduce((prev , cur) => {
        return prev + cur.count
    } , 0)
    return total
}
export default totalCount