import { render, screen,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LogoutButton from "./LogoutButton"
import {shallow} from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it("Is coverpage is visible",async()=>{
    render(<LogoutButton></LogoutButton>);
    const card=screen.getByText("Log Out");
    const button=screen.getByRole("button");
    expect(card).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});
it("Expects to run onClick function when button is pressed in the DOM", () => {
    const mockCallBackClick = jest.fn();
    const wrapper = shallow(<button onClick={mockCallBackClick}/>);
    wrapper.find('button').simulate('click');
    expect(mockCallBackClick.mock.calls.length).toEqual(1);
});
it("button work",()=>{
    const callback=jest.fn();
    render(<button title="Log Out" onClick={callback}></button>);
    fireEvent.click(screen.getByRole("button"));
    expect(callback).toHaveBeenCalledTimes(1);
    });
  
  


