import {render,screen} from "@testing-library/react"
import LibraryBtn from "./librarybtn";
import "@testing-library/jest-dom";

it("Is library button is visible",async()=>{
    render(<LibraryBtn title="Add to Library"></LibraryBtn>);
    const button=screen.getByText("Add to Library");
    expect(button).toBeInTheDocument();
});