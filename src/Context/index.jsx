import React from 'react';
import PropTypes from "prop-types"
const ShoppingContext = React.createContext();


export function Provedor({children}){
    Provedor.propTypes = {
        children: PropTypes.node.isRequired,
    }
    const [count, setCount] = React.useState(0);
    const [productDetailOpen, setProductDetailOpen] = React.useState(false);
    const [productToShow, setProducttoShow] = React.useState({});


    const openProductItem = () => setProductDetailOpen(true);
    const closeProductItem = () => setProductDetailOpen(false);
    return(
        <ShoppingContext.Provider value={
            {
                count,
                setCount,
                productDetailOpen,
                openProductItem,
                closeProductItem,
                productToShow,
                setProducttoShow
            }
        } >
            {children}
        </ShoppingContext.Provider>
    );
}

export const MiContexto=()=>React.useContext(ShoppingContext);