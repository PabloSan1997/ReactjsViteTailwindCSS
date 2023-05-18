import React from 'react';
import PropTypes from "prop-types"
const ShoppingContext = React.createContext();


export function Provedor({children}){
    Provedor.propTypes = {
        children: PropTypes.node.isRequired,
    }
    const [count, setCount] = React.useState(0);
    return(
        <ShoppingContext.Provider value={
            {
                count,
                setCount
            }
        } >
            {children}
        </ShoppingContext.Provider>
    );
}

export const MiContexto=()=>React.useContext(ShoppingContext);