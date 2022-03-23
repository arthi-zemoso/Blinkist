import Header from './header'
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:"organisms/header",
    component:Header
}as ComponentMeta<typeof Header>

const Template:ComponentStory<typeof Header> = (args) => <Header {...args} />;
export const AvatarHeader = Template.bind({});
AvatarHeader.args={
    avatar:true,
    avatarLatter:'A',
    explore:false,
    openSearch:undefined
}