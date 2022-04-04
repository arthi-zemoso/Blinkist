import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import LoginButton from "./LoginButton"
it("Is coverpage is visible",async()=>{
    render(<LoginButton></LoginButton>);
    const card=screen.getByText("Log In");
    expect(card).toBeInTheDocument();
});