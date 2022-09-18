import { Meta, Story } from "@storybook/react";
import { colors } from "../shared";

import { RowItemCard, RowItemCardProps } from "./RowItemCard";

export default {
  title: "Molecules/RowItemCard",
  component: RowItemCard
} as Meta;

const Template: Story<RowItemCardProps> = (args) => <RowItemCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  mode: colors.yellow,
  id: "on-click-card",
  url: "https://codely.tv",
  initialState: false,
  initialValue: "This is the card title",
  onToggleChange: () => {}
};

export const Edit = Template.bind({});
Edit.args = {
  mode: colors.yellow,
  id: "edit-card",
  initialValue: "RowItemCard title",
  initialState: false,
  onToggleChange: () => {}
};
