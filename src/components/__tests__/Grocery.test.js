import Grocery from "../Grocery";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Should load Grocery component",()=>{
    test("test Grocery Component",()=>{
        render(<Grocery/>)

        const checkMessage=screen.getByText("This is the grocery store...")
        expect(checkMessage).toBeInTheDocument();
    })

})