import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_RES_MENU_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_RES_MENU_DATA),
  })
);

it("Should load Restaurant Menu Component", async () => {
  await act(async () => render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
  <RestaurantMenu />
  <Cart/>
  </Provider>
  </BrowserRouter>

));

  const accordionHeader=screen.getByText("NEW CHICKEN ROLLS (15)");
  fireEvent.click(accordionHeader);

  const foodItemsLength=screen.getAllByTestId("foodItems");

  expect(foodItemsLength.length).toBe(15);

  expect(screen.getByText("Cart - 0 items")).toBeInTheDocument();


  const addBtns=screen.getAllByRole("button", {name: "Add +"});
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - 1 items")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - 2 items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(17);

  fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}));

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  expect(screen.getByText("Cart is empty.Please add items to Cart")).toBeInTheDocument();


});

