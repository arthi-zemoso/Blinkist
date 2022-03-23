import MyLibrary from './LIbrary'
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:"organisms/LIbrary",
    component:MyLibrary
}as ComponentMeta<typeof MyLibrary>
const Template=() => <MyLibrary  />;
export const Library = Template.bind({});