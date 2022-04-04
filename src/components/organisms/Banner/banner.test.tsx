import { render ,screen} from "@testing-library/react";
import Banner from "./banner";
import "@testing-library/jest-dom";

it("Is banner is visible",async()=>{
    render(<Banner></Banner>);
    const banner=screen.getByText("Explore Books on entrepreneurship");
    expect(banner).toBeInTheDocument();
});
