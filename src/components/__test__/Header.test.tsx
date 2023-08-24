import { fireEvent, render , screen } from "@testing-library/react";
import Header from "../Header";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import React from "react";

const mockStore = configureStore();

test("mock redux store" , ()=> {
    const intitialState = {
        cart : {
            items : [],
        },
    };
    const store = mockStore(intitialState);
    render(
        <Provider store = {store}>
            <Header/>
        </Provider>
    );

    const title = screen.getByText("Food App");
    expect(title).toBeInTheDocument();

    const clearCartBtn = screen.getByTestId("clearCartBtn");
    expect(clearCartBtn).toBeInTheDocument();
    fireEvent.click(clearCartBtn);
});