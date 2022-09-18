import { Meta, Story } from "@storybook/react";
import React from "react";

import { BoxProps, Box } from "./Box";

export default {
  title: "Atoms/Box",
  component: Box
} as Meta;

const Template: Story<BoxProps> = (args) => (
  <Box {...args}>
    <h3>Box title</h3>
    <p>Box description</p>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  mode: "yellow"
};

export const Green = Template.bind({});
Green.args = {
  mode: "green"
};

export const Pink = Template.bind({});
Pink.args = {
  mode: "pink"
};

export const Purple = Template.bind({});
Purple.args = {
  mode: "purple"
};

export const Orange = Template.bind({});
Orange.args = {
  mode: "orange"
};
