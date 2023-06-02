export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}


export const updateCart = (state) => {
    // price
    state.ItemPrice = addDecimals(state.cartItems.reduce((acc,item) => acc +item.price * item.qty, 0));

    // shipping cost price (if over 100 free else 15$)
    state.shippingPrice = addDecimals(state.ItemPrice > 100 ? 0 : 15);

    //tax
    state.taxPrice = addDecimals(Number(0.15 * state.ItemPrice).toFixed(2));

    //TOTAL price
    state.totalPrice = (
        Number(state.ItemPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);
    localStorage.setItem('cart',JSON.stringify(state));

    return state
}