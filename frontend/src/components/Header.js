import React,{ useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {itemContext } from "../context/ItemContext";

const Header = () => {
    const { itemsInCart, totalPrice} = useContext(itemContext);
    return(
        <div className="header">
            <h1 className="RFH">Rajiv Pustakalaya</h1>
            <h3 style= {{color:"blue"}}>Total price: {totalPrice} </h3> 

            <div className="cart_num">
                <div className="cart_items">{itemsInCart}</div>
                <FontAwesomeIcon icon ={faCartShopping} size="4x" />

            </div>
        </div>
    );
};

export default Header;