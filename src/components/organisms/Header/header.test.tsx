import { render ,screen} from "@testing-library/react";
import Header from "./header";
import "@testing-library/jest-dom";

it("Is footer is visible",async()=>{
    render(<Header></Header>);
    const header=screen.getByText("Explore");
    expect(header).toBeInTheDocument();
});
