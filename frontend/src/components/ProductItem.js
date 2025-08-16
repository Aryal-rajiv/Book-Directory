import React, { useContext } from "react";
import { itemContext } from "../context/ItemContext";

const ProductItem = ({ product }) => {
    const { addToCart, removeFromCart } = useContext(itemContext);

    const handleAddToCart = (product) => {
        console.log(product);
        addToCart(product);

    };

    const handleRemoveToCart = (product) => {
        console.log("Product removed from cart:", product);
        removeFromCart(product);
    };

    return(
        <div classname="product-card">
            <img 
                    className="product-image"
                    src = {product.image}
                    alt={product.name} 
             />

             <div className="product-details">
                <h3 style={{ fontweight:700 }}>{product.name}</h3>
                <p style={{fontweight: 300 }}>{product.description}</p> 
                <p style={{ fontweight: 500 }}> Price: Rs {product.price} </p> 
                <p> {product.genra}</p>
                <p style={{ fontweight: "700" , color: "brown"}}>
                    {product.author}
                </p>

                <button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                </button>
                <button onClick={() => handleRemoveToCart(product)}>-</button>

                </div>
             </div>
    );
};

export default ProductItem;