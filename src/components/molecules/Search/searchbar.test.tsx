import { render ,screen} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import SearchBar from "./searchbar";

it("Is searchbar is visible",async()=>{
    render(<SearchBar></SearchBar>);
    const search=screen.getByPlaceholderText("Search by title or author");
    expect(search).toBeInTheDocument();
});