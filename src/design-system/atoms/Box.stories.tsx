import { Meta, Story } from "@storybook/react";

import { colors } from "../shared";
import { Box, BoxProps } from "./Box";

export default {
  title: "Atoms/Box",
  component: Box
} as Meta;

const Template: Story<BoxProps> = (args) => (
  <Box {...args}>This is an empty box</Box>
);

export const Default = Template.bind({});
Default.args = {
  mode: colors.yellow
};

export const Green = Template.bind({});
Green.args = {
  mode: colors.green
};

export const Pink = Template.bind({});
Pink.args = {
  mode: colors.pink
};

export const Purple = Template.bind({});
Purple.args = {
  mode: colors.purple
};

export const Orange = Template.bind({});
Orange.args = {
  mode: colors.purple
};
