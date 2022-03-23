import BookCardComponent from "./BookCardComponent";
import { ThemeProvider } from '@emotion/react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ResponsiveFontTheme from "../../../themes/theme";
import React from "react";

export default {
    title:"molecules/Card",
    component:BookCardComponent
}as ComponentMeta<typeof BookCardComponent>
const Template:ComponentStory<typeof BookCardComponent> = (args) =>
<ThemeProvider theme={ResponsiveFontTheme}>
     <BookCardComponent {...args} /></ThemeProvider>;
     
export const ImgCard = Template.bind({});
ImgCard.args={
    title:"Bring your human to work",
    alt:"bring human",
    author:"Martin gupta",
    timeRead:"13-min read",
    numberRead:"1.9k reads",
    toAdd:true
};
