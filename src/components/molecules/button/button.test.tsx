import {render,screen} from "@testing-library/react"
import ButtonComponent from "./ButtonComponent";
import "@testing-library/jest-dom";

it("Is library button is visible",async()=>{
    render(<ButtonComponent title="Add to Library"></ButtonComponent>);
    const button=screen.getByText("Add to Library");
    expect(button).toBeInTheDocument();
});