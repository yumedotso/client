import { Meta, Story } from "@storybook/react";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { IconButton, IconButtonProps } from "./IconButton";

export default {
  title: "Atoms/IconButton",
  component: IconButton
} as Meta;

const ButtonTemplate: Story<IconButtonProps> = (args) => (
  <IconButton {...args}>
    <AiOutlineCheckCircle size="30" />
  </IconButton>
);

export const DarkButton = ButtonTemplate.bind({});
DarkButton.args = {
  mode: "dark",
  size: "medium",
  label: "Play"
};
export const LightButton = ButtonTemplate.bind({});
LightButton.args = {
  mode: "light",
  size: "medium"
};

export const AsLink: Story<IconButtonProps> = () => (
  <IconButton
    href="https://twitch.tv/codelytv"
    target="_blank"
    mode="dark"
    label="Síguenos en Twitch"
  >
    <AiOutlineCheckCircle size="30" />
  </IconButton>
);

export const AsLinkSimple: Story<IconButtonProps> = () => (
  <IconButton
    href="https://twitch.tv/codelytv"
    target="_blank"
    mode="simple"
    size="small"
    label="Go to link"
  >
    <AiOutlineCheckCircle size="20" />
  </IconButton>
);
