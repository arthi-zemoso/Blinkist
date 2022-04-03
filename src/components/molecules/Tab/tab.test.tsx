import { render ,screen} from "@testing-library/react";
import Tab from "./tab";
import React from "react";
import "@testing-library/jest-dom";

it("Is tab is visible",async()=>{
    render(<Tab title="hello"></Tab>);
    const logo=screen.getByText("hello");
    expect(logo).toBeInTheDocument();
});