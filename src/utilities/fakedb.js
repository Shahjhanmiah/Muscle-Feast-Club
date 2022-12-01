// use local storage to manage cart data
const addToDb = id => {
    //setting to the localStorage
    localStorage.setItem('Break-time', JSON.stringify(id))
}

const getSavedTime = () => {
    let savedTime = localStorage.getItem('Break-time')
    savedTime = JSON.parse(savedTime)
    return savedTime;
}
// 

export {
    addToDb,
    getSavedTime,
}