/* eslint-disable semi */
/* eslint-disable max-len */
import { fireEvent, render , screen} from "@testing-library/react";
import Card from "../Card";
import React from "react";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";

const mockStore = configureStore([]);
const allProducts = [
    {id : "1" , title : "title" , price : "price" , desciption : "description" , category : "category" , image : "string" , quantity : "1" , rating : "rating" }
]


describe("card compoent" , ()=>{
    test("should render correct props" , ()=>{
        const initialState = {
            quantity : {
                allProducts : allProducts
            }
        }

        const store = mockStore(initialState);

        const props = {
            image: 'image_url',
            title: 'Product Title',
            price: 10,
            category: 'Category',
            rating: { rate: 4 },
            id: 1,
            index : 2,
        }

        render(
            <Provider store = {store}>
                <Card {...props}/>
            </Provider>
        )

        const btn = screen.getByTestId("btn")
        fireEvent.click(btn)

        const titleElement = screen.getByTestId("titleCard");
        expect(titleElement).toBeInTheDocument();
        
        const plusBtn = screen.getByTestId("plusBtn")
        fireEvent.click(plusBtn);

        const minusBtn = screen.getByTestId("minusBtn")
        fireEvent.click(minusBtn);


        
     
       
    });
});