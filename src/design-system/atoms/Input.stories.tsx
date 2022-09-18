import { Meta, Story } from "@storybook/react";
import React from "react";

import { Input, InputProps } from "./Input";

export default {
  title: "Atoms/Forms/Input",
  component: Input
} as Meta;

const InputTemplate: Story<InputProps> = (args) => (
  <Input
    {...args}
    label="Nombre y apellidos"
    placeholder="Nombre y apellidos"
    id="input"
    onChange={() => {}}
  />
);

export const Default = InputTemplate.bind({});
Default.args = {
  size: "small"
};

export const Medium = InputTemplate.bind({});
Medium.args = {
  size: "medium"
};

export const WithHiddenLabel = InputTemplate.bind({});
WithHiddenLabel.args = {
  hideLabel: true
};

export const Simple = InputTemplate.bind({});
Simple.args = {
  hideLabel: true,
  size: "simple"
};
