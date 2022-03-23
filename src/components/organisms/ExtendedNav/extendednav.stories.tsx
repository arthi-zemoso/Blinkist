import ExtendedNav from './extendednav'
import { ComponentMeta} from "@storybook/react";

export default {
    title:"organisms/extendednav",
    component:ExtendedNav
}as ComponentMeta<typeof ExtendedNav>

const Template=() => <ExtendedNav />;
export const ExtendedNav1 = Template.bind({});