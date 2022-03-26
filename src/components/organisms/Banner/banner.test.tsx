import { render ,screen} from "@testing-library/react";
import Banner from "./banner";
import "@testing-library/jest-dom";

it("Is banner is visible",async()=>{
    render(<Banner></Banner>);
    const banner=screen.getAllByRole("heading");
    expect(banner).toBeInTheDocument();
});
