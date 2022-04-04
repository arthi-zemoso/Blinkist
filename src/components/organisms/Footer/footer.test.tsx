import { render ,screen} from "@testing-library/react";
import Footer from "./footer";
import "@testing-library/jest-dom";

it("Is footer is visible",async()=>{
    render(<Footer></Footer>);
    const footer=screen.getByText("Code of Conduct");
    expect(footer).toBeInTheDocument();
});
