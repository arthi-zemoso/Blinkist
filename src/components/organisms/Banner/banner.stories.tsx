import Banner from './banner';
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:"organisms/banner",
    component:Banner
}as ComponentMeta<typeof Banner>

const Template=() => <Banner  />;
export const Banner1 = Template.bind({});