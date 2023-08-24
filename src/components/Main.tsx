import { useEffect} from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { allData } from "../redux/quantitySlice";
import React from "react";
import {RootState , AppDispatch} from "../redux/store";
import "./Main.css";

const Main = () => {

    // eslint-disable-next-line max-len
    const allItems = useSelector((state : RootState) => (state?.quantity?.allProducts));
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(allData());
    }, [dispatch]);

    console.log(allItems , "allitems");

    return (
        <div className = "card" >
            {
                allItems?.map((product, index) => (
                    <Card key={index} {...{...product }} />
                ))};
        </div>
    );
};

export default Main;