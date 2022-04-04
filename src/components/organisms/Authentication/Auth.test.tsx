import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthComponent from "./AuthComponent"

it("Is entrypage is visible",async()=>{
    render(<AuthComponent></AuthComponent>);
    const card=screen.getByText("Hi");
    expect(card).toBeInTheDocument();
});