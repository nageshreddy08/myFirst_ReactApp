import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom";

//When there is a fetch/api call or state update is happening, we should use global.fetch to fake the api call,
// because fetch is browser's api. Here we are testing on js-dom not on actual browser.
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component with Search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
//we can get search button using getByRole as well
  const SearchButton= screen.getByRole("button", {name:"Search"})
  // searchInput = screen.getByTestId("searchInput");
  expect(SearchButton).toBeInTheDocument();
});

it("Should render the restaurants list for burger", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsCountBeforeSearch= screen.getAllByTestId("resCard");
  expect(cardsCountBeforeSearch.length).toBe(20);

  const SearchButton = screen.getByRole("button", { name: "Search" });

//If we want to find element by getByTestId, first add--> data-testid in the element to uniquely identify it.
//Ex: Refer RestaurantCard.js file

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(SearchButton);

  const cardsAfterSearch=screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});
