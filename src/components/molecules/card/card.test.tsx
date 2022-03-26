import { render, screen } from "@testing-library/react";
import ImageCard from "./BookCardComponent";

import "@testing-library/jest-dom";


it("Is card is visible",async()=>{
    render(<ImageCard id={12} title="Beyond" author="Martin guptil" timeRead="13 min read" numberRead="13k reads" toAdd={true}  ></ImageCard>);
    const card=screen.getByRole("heading");
    expect(card).toBeInTheDocument();
});