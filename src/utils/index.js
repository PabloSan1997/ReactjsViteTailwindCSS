/**
 * @param {Array} products cardProduct: Array of products
 * @return {number} total price
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price);
    return sum;
}
