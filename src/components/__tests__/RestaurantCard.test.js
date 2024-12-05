import RestaurantCard from "../RestaurantCard";
import { render, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";



it("Should render RestaurantCard component with props Data", ()=>{

    render(<RestaurantCard resData={MOCK_DATA} />)

    const name=screen.getByText("Pizza Hut")
    expect(name).toBeInTheDocument();

});