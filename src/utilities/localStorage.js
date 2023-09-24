
const getStoredCard=()=>{
    const isCartAvailable = localStorage.getItem('donate');
    if (isCartAvailable) {
        return JSON.parse(isCartAvailable);
    }
    return [];
}

const saveCardToLs=(card)=>{
    const stringified= JSON.stringify(card);
    localStorage.setItem('donate', stringified);
}

const saveToLc=(id)=>{
const getExistCart = getStoredCard();
getExistCart.push(id);
saveCardToLs(getExistCart);




}
export { saveToLc}