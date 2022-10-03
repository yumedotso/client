import { Story, Meta } from "@storybook/react";

import { TextBox, TextBoxProps } from "./TextBox";

export default {
  title: "Atoms/TextBox",
  component: TextBox
} as Meta;

const Template: Story<TextBoxProps> = (args) => <TextBox {...args} />;
export const Default = Template.bind({});
Default.args = {
  id: "on-click-card",
  url: "https://github.com/gagocarrilloedgar",
  initialValue: "This is the card title",
  showIconButton: true,
  size: "small",
  onInputChange: () => {}
};

export const Edit = Template.bind({});
Edit.args = {
  id: "edit-card",
  initialValue: "RowItemCard title",
  showIconButton: true,
  size: "small",

  onInputChange: () => {}
};

export const NoIconButton = Template.bind({});
NoIconButton.args = {
  id: "edit-card",
  initialValue: "RowItemCard title",
  showIconButton: false,
  size: "small",
  onInputChange: () => {}
};

export const TitleTextBox = Template.bind({});
TitleTextBox.args = {
  id: "edit-card",
  initialValue: "Title text 🥳",
  showIconButton: false,
  size: "large",
  onInputChange: () => {}
};
