import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import EntryPage from "./EntryPage";


it("Is entrypage is visible",async()=>{
    render(<EntryPage></EntryPage>);
    const card=screen.getByText("My Library");
    expect(card).toBeInTheDocument();
});