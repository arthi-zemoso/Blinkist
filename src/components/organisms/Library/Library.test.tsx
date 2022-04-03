
import "@testing-library/jest-dom";
import MyLibrary from "./MyLibrary";
import { render, screen,fireEvent } from "@testing-library/react";
//import { shallow } from 'enzyme';
//import renderer from 'react-test-renderer';
//import ShallowRenderer from 'react-test-renderer/shallow';
import BookCardComponent from '../../molecules/card/BookCardComponent'
import LibraryBtn from '../../molecules/button/librarybtn'

it("Is nav Section is visible",async()=>{
    render(<MyLibrary></MyLibrary>);
    const LibSection=screen.getByText("Currently reading");
    expect(LibSection).toBeInTheDocument();
});
it("Is finished is visible",async()=>{
    render(<MyLibrary></MyLibrary>);
    const LibSection=screen.getByText("Finished");
    expect(LibSection).toBeInTheDocument();
   
});
it("card rendered",async()=>{
  render(<BookCardComponent id={4} title="The Fate of Food" timeRead="12 min read" numberRead="13k reads" toAdd={true} status="Finished Reading" ></BookCardComponent>);
  const card=screen.getByTitle("The Fate of Food");
  expect(card).toBeInTheDocument();
});
it(" is card rendered",async()=>{
    render(<BookCardComponent id={4} title="The Fate of Food" timeRead="12 min read" numberRead="13k reads" toAdd={true} status="Currently Reading" ></BookCardComponent>);
    const card=screen.getByTitle("The Fate of Food");
    expect(card).toBeInTheDocument();
  });
  it("button work",()=>{
    const callback=jest.fn();
    render(<LibraryBtn title="Finished" onClick={callback}></LibraryBtn>);
    fireEvent.click(screen.getByText(/Finished/i));
    expect(callback).toHaveBeenCalledTimes(1);
    });
    it("button currently reading  work",()=>{
        const callback=jest.fn();
        render(<LibraryBtn title="Read Again" onClick={callback}></LibraryBtn>);
        fireEvent.click(screen.getByText(/Read Again/i));
        expect(callback).toHaveBeenCalledTimes(1);
        const data=screen.getByRole("button");
    expect(data).toBeInTheDocument();
        });
        it("button  card work",()=>{
          const callback=jest.fn();
          render(<BookCardComponent  id={4} title="The Fate of Food" timeRead="12 min read" numberRead="13k reads" toAdd={true} status="Finished Reading" />);
          const card=screen.getByRole("img");
          render(<LibraryBtn title="Finished" onClick={callback}></LibraryBtn>);
          fireEvent.click(screen.getByText(/Finished/i));
          expect(callback).toHaveBeenCalledTimes(1);
          expect(callback).toBeDefined();
          expect(card).toBeInTheDocument();
          });
          it("is account working",async()=>{
            render(<MyLibrary/>);
            const acc=await screen.findByTestId("7");
            fireEvent.click(acc);
            expect(acc).toBeInTheDocument();
        });
    
    



