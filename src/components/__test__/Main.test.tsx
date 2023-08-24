/* eslint-disable max-len */
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Main from "../Main";
import React from "react";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockProducts = [
    { id: 1, title: "product1", image: "image-url", index: "index", category: "category", price: "price" }
];

describe("Main Component", () => {
    test("It should render a list of products from the redux store", async () => {
        const intitalState = {
            quantity: {
                allProducts: mockProducts
            }
        };
        const store = mockStore(intitalState);

        render(
            <Provider store={store}>
                <Main />
            </Provider>
        );

        mockProducts.forEach((product) => {
            const productTitleElement = screen.queryByText(product.title);
            expect(productTitleElement).toBeInTheDocument();
        });
    });
});
