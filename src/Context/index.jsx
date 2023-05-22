import React from 'react';
import PropTypes from "prop-types"
const ShoppingContext = React.createContext();


export function Provedor({ children }) {
    Provedor.propTypes = {
        children: PropTypes.node.isRequired,
    }
    const [count, setCount] = React.useState(0);
    const [productDetailOpen, setProductDetailOpen] = React.useState(false);
    const [productToShow, setProducttoShow] = React.useState({});
    const [cardProducts, setCardProducts] = React.useState([]);
    const openProductItem = () => setProductDetailOpen(true);
    const closeProductItem = () => setProductDetailOpen(false);


    const [checkoutProductDetail, setCheckoutProductDetail] = React.useState(false);
    const openCheckoutItem = () => setCheckoutProductDetail(true);
    const closeCheckoutItem = () => setCheckoutProductDetail(false);

    const [order, setOrder] = React.useState([]);
    return (
        <ShoppingContext.Provider value={
            {
                count,
                setCount,
                productDetailOpen,
                openProductItem,
                closeProductItem,
                productToShow,
                setProducttoShow,
                cardProducts,
                setCardProducts,
                checkoutProductDetail,
                openCheckoutItem,
                closeCheckoutItem,
                order,
                setOrder
            }
        } >
            {children}
        </ShoppingContext.Provider>
    );
}

export const MiContexto = () => React.useContext(ShoppingContext);