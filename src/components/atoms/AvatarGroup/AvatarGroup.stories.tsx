import { ComponentProps } from "react";

import { Meta, Story } from "@storybook/react";

import { AvatarGroup } from "./AvatarGroup";

export default {
  title: "Components/atoms/AvatarGroup",
  component: AvatarGroup,
} as Meta;

const Template: Story<ComponentProps<typeof AvatarGroup>> = (args) => (
  <AvatarGroup {...args} />
);

export const NormalAvatarGroup = Template.bind({});
NormalAvatarGroup.args = {
  avatars: [...new Array(5)].map((i) => ({ alt: i })),
  limit: 2,
};
