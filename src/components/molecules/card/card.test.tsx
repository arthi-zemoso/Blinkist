import { render, screen } from "@testing-library/react";
import BookCardComponent from "./BookCardComponent";

import "@testing-library/jest-dom";


it("Is card is visible",async()=>{
    render(<BookCardComponent id={4} title="The Fate of Food" timeRead="12 min read" numberRead="13k reads" toAdd={true}  ></BookCardComponent>);
    const card=screen.getByTitle("The Fate of Food");
    expect(card).toBeInTheDocument();
});