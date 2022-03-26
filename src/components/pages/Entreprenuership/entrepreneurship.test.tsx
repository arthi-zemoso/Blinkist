import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Entrepreneurship from "./entrepreneurship";


it("Is entrypage is visible",async()=>{
    render(<Entrepreneurship></Entrepreneurship>);
    const card=screen.getByText("My Library");
    expect(card).toBeInTheDocument();
});