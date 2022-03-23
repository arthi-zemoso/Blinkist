import NavSection from './navsection'
import { ComponentMeta } from "@storybook/react";

export default {
    title:"organisms/navsection",
    component:NavSection
}as ComponentMeta<typeof NavSection>
const Template=() => <NavSection  />;
export const Navsection = Template.bind({});