import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import BookDetails from "./bookdetails";


it("Is entrypage is visible",async()=>{
    render(<BookDetails></BookDetails>);
    const card=screen.getByText("Beyond Entrepreneurship 2.0");
    expect(card).toBeInTheDocument();
});