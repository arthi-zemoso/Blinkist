
import "@testing-library/jest-dom";
import MyLibrary from "./LIbrary";
import { render ,screen} from "@testing-library/react"

it("Is nav Section is visible",async()=>{
    render(<MyLibrary></MyLibrary>);
    const LibSection=screen.getByText("Library");
    expect(LibSection).toBeInTheDocument();
});