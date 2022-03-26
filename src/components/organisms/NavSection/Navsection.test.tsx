
import "@testing-library/jest-dom";
import NavSection from "./navsection";
import { render ,screen} from "@testing-library/react"

it("Is nav Section is visible",async()=>{
    render(<NavSection></NavSection>);
    const navSection=screen.getByText("Editorial");
    expect(navSection).toBeInTheDocument();
});