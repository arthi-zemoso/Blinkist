import { render, screen,fireEvent} from "@testing-library/react";
import LibraryBtn from "../../molecules/button/librarybtn";
import "@testing-library/jest-dom";
import Entrepreneurship from "./entrepreneurship";
import BookCardComponent from '../../molecules/card/BookCardComponent'
import renderer from 'react-test-renderer'
import {shallow} from "enzyme"
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
const book={
    "id": 1,
    "name":"Being Boss",
    "author":"Kathleen Shannon and Emily...",
     "time":"13 minute read",
     "status":"F"
}
it("Is entrypage is visible",async()=>{
    render(<Entrepreneurship></Entrepreneurship>);
    const card=screen.getByText("Trending Blinks");
    expect(card).toBeInTheDocument();
});
it("is library button visible",async()=>{
    render(<LibraryBtn title="Add to Library"></LibraryBtn>);
    const button=screen.getByText("Add to Library");
    expect(button).toBeInTheDocument();
});
it("first snapshot",()=>{
    const component =renderer.create(<BookCardComponent id={book.id} title={book.name} author={book.author}></BookCardComponent>);
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
});

it("button work",()=>{
    const callback=jest.fn();
    render(<LibraryBtn title="Add to Library" onClick={callback}></LibraryBtn>);
    fireEvent.click(screen.getByText(/Add to Library/i));
    expect(callback).toHaveBeenCalledTimes(1);
   
    });
    it("is grid visible",async()=>{
        render(<Entrepreneurship/>);
        const grid=screen.getByRole("textbox");
        expect(grid).toBeInTheDocument();
    });
    it("is account working",async()=>{
        render(<Entrepreneurship/>);
        const acc=await screen.findByTestId("4");
        fireEvent.click(acc);
        expect(acc).toBeInTheDocument();
    });






