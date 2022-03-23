import Footer from './footer'
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:"organisms/footer",
    component:Footer
}as ComponentMeta<typeof Footer>
const Template=() => <Footer  />;
export const footer1 = Template.bind({});