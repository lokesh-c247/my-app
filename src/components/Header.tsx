import { useDispatch, useSelector } from "react-redux";
import { clearCart} from "../redux/cartSlice";
import React from "react";
import {RootState , AppDispatch} from "../redux/store";
const Header = () => {

    const allItems = useSelector((state : RootState) => state.cart.items)
    const dispatch = useDispatch<AppDispatch>();
    
    return (
       <div style={{display : "flex" , alignItems : "center" , justifyContent : "space-around" , margin : "1rem" }}>
            <div><h1>Food App</h1></div>
            <div>
                <ul style={{listStyle : "none" , display : "flex" , flexDirection : "column" , gap : "5px"}}>
                    <li>Quantity :- {allItems.length}</li>
                    <button ><li data-testId = "clearCartBtn" onClick={()=>{dispatch(clearCart())}} >Clear cart</li></button>
                </ul>
            </div>
       </div>
    )
}

export default Header;