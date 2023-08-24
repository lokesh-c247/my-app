/* eslint-disable max-len */
import { useDispatch, useSelector } from "react-redux";
import { clearCart} from "../redux/cartSlice";
import React from "react";
import {RootState , AppDispatch} from "../redux/store";
import "./Card.css";

const Header = () => {

    const allItems = useSelector((state : RootState) => state.cart.items);
    const dispatch = useDispatch<AppDispatch>();
    
    return (
       <div className="header">
            <div><h1>Food App</h1></div>
            <div>
                <ul style={{}}>
                    <li>Quantity :- {allItems.length}</li>
                    <button ><li data-testId = "clearCartBtn" onClick={()=>{dispatch(clearCart());}} >Clear cart</li></button>;
                </ul>
            </div>
       </div>
    );
};

export default Header;