import { render ,screen,fireEvent} from "@testing-library/react";
import Header from "./header";
import "@testing-library/jest-dom";
import Search from '../../atoms/Icons/Vectorsearch.svg';

it("Is footer is visible",async()=>{
    render(<Header></Header>);
    const header=screen.getByText("Explore");
    expect(header).toBeInTheDocument();
});
it("button currently reading  work",()=>{
    const callback=jest.fn();
    render(<img src={Search} alt="search" onClick={callback}></img>);
    const search=screen.getByAltText("search")
    fireEvent.click(screen.getByAltText("search"));
    expect(callback).toHaveBeenCalledTimes(1);
    expect(search).toBeEnabled();
    });
    it("Is header is visible",async()=>{
        render(<Header avatar={false} explore={false} search={false} ></Header>);
        const header=screen.getByText("Explore");
        expect(header).toBeInTheDocument();
    }); 
    it("Is header is visible2",async()=>{
        render(<Header avatar={false} explore={true} search={false} ></Header>);
        const header=screen.getByText("Explore");
        expect(header).toBeInTheDocument();
    }); 
    it("Is header is visible3",async()=>{
        render(<Header avatar={false} explore={true} search={true} ></Header>);
        const header=screen.getByText("Explore");
        expect(header).toBeInTheDocument();
    }); 
    it("Is header is visible4",async()=>{
        render(<Header avatar={false} explore={false} search={true} ></Header>);
        const header=screen.getByText("Explore");
        expect(header).toBeInTheDocument();
    }); 
    it("is search working",async()=>{
        render(<Header/>);
        const search=screen.getByTestId("search");
        fireEvent.click(search);
    });
    it("is explore working",async()=>{
        render(<Header/>);
        const explore=screen.getByTestId("test");
        fireEvent.click(explore);
    });
    it("is account working",async()=>{
        render(<Header/>);
        const acc=screen.getByTestId("account");
        fireEvent.click(acc);
    });
    it("is library working",async()=>{
        render(<Header/>);
        const acc=screen.getByTestId("lib");
        fireEvent.click(acc);
    });
