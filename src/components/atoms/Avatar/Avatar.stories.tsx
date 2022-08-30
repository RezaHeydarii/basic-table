import { ComponentProps } from "react";

import { Meta, Story } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
  title: "Components/atoms/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<ComponentProps<typeof Avatar>> = (args) => (
  <Avatar {...args} />
);

export const NormalAvatar = Template.bind({});
NormalAvatar.args = {
  src: undefined,
};
