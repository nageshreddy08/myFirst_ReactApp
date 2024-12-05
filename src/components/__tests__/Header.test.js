import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockGithubDetails.json";
// import { act } from "react-dom/test-utils"
import {act} from 'react';


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);


it("Should render Header component with login button", async () => {
  await act(async ()=> { 
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
})
   
  const button=screen.getByRole("button", {name:"Login"});
  expect(button).toBeInTheDocument();
});

it("Should check cart with 0 items on Header Load", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems=screen.getByText("Cart - 0 items");
    

    expect(cartItems).toBeInTheDocument();
  });

//This test case is failing to find Logout button, will check later


it("Should change Login button to Logout on click", async () => {
    await act(async ()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      )
});
  
    const loginButton=screen.getByRole("button", { name:"Login" });

    fireEvent.click(loginButton);
    //console.log(loginButton);

    const logoutButton = screen.getByRole("button", { name:"Logout" });

    expect(logoutButton).toBeInTheDocument();

    fireEvent.click(logoutButton);
    expect(loginButton).toBeInTheDocument();

  });

it("Should render userName inside Header component", async () => {
    await act(async ()=>{
        render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header />
              </Provider>
            </BrowserRouter>
          );
});
    
  
    const userItem=screen.getByText("User:nageshreddy08");
    expect(userItem).toBeInTheDocument();
  });
  