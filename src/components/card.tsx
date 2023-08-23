import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import React, { useState } from "react";
import { decreaseQuantity, increaseQuantity } from "../redux/quantitySlice";
import {RootState , AppDispatch} from "../redux/store";

interface Rating {
    rate : number;
}

interface Props {
    image: string;
    title: string;
    price: number;
    category: string;
    rating: Rating;
    id: number;
    index?: number ;
}


const Card = (props: Props) => {
    const { image, title, price, category, rating, id , index } = props;
    const [added, setAdded] = useState(true)
    const allItems = useSelector((state:RootState) => (state.quantity.allProducts));
    const dispatch = useDispatch<AppDispatch>();

    const selectedItem = allItems.find((item) => item.id === id)
    const itemQuantity = selectedItem ? selectedItem.quantity : 0;

    return (
        <div key={index} style={{ height: "max-content", width: "220px", border: "2px solid black", padding: "10px", margin: "1rem", background: "#fffff" }}>
            <img src={image} alt="na" height="100px" width="100px" />
            <h4 data-testId="titleCard" className="title">{title}</h4>
            <h5>{price}</h5>
            <h6>{category}</h6>
            <p>{rating?.rate}</p>
            {
                added ?
                    <button data-testId="btn" className="btn" onClick={() => { dispatch(addItem(props)); setAdded(false) }}>Add to cart</button>
                    :
                    <div>
                        <button data-testId="plusBtn" className="box" onClick={() => { dispatch(addItem(props)); dispatch(increaseQuantity(id)); }}>+</button>

                        <span>{itemQuantity}</span>

                        <button data-testId="minusBtn" className="box" onClick={() => { dispatch(removeItem(id)); dispatch(decreaseQuantity(id)) }}>-</button>
                    </div>
            }

        </div>
    )
}

export default Card;