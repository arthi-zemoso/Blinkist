import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Coverpage from "./coverpage"
it("Is coverpage is visible",async()=>{
    render(<Coverpage></Coverpage>);
    const card=screen.getByAltText("cover");
    expect(card).toBeInTheDocument();
});