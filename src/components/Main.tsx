import { useEffect} from "react";
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { allData } from "../redux/quantitySlice";
import React from "react";
import {RootState , AppDispatch} from "../redux/store";

const Main = () => {

    const allItems = useSelector((state : RootState) => (state?.quantity?.allProducts));
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(allData());
    }, [dispatch])

    console.log(allItems , "allitems");

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                allItems?.map((product, index) => (
                    <Card key={index} {...{...product }} />
                ))}
        </div>
    )
}

export default Main;