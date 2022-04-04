import { render, screen } from "@testing-library/react";
import Header from '../../organisms/Header/header'
import "@testing-library/jest-dom";
import EntryPage from "./EntryPage";


it("Is entrypage is visible",async()=>{
    render(<EntryPage></EntryPage>);
    const card=screen.getByText("My Library");
    expect(card).toBeInTheDocument();
});
it("Is header is visible",async()=>{
    render(<Header avatar={false} explore={false} search={false}></Header>);
    const header=screen.getByText("Account");
    expect(header).toBeInTheDocument();
});

