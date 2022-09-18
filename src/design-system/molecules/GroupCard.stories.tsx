import { Meta, Story } from "@storybook/react";
import { colors } from "../shared";
import { GroupCard, GroupCardProps } from "./GroupCard";

export default {
  title: "Molecules/GroupCard",
  component: GroupCard
} as Meta;

const members = [
  {
    alt: "Nino Dafonte",
    src: "/avatar1.jpg"
  },
  {
    alt: "Núria Soriano",
    src: "/avatar2.jpg"
  },
  {
    alt: "Javier Fernández",
    src: "https://robohash.org/468355c6815fe2c112e0de6724ca5c0a?set=set4&bgset=&size=400x400"
  }
];

const Template: Story<GroupCardProps> = (args: GroupCardProps) => (
  <GroupCard {...args} />
);
export const Default = Template.bind({});
Default.args = {
  mode: colors.orange,
  id: "on-click-card",
  initialValue: "This is the card title",
  description: "some dummy description",
  members
};

export const Edit = Template.bind({});
Edit.args = {
  mode: colors.orange,
  id: "edit-card",
  edit: true,
  initialValue: "RowItemCard title",
  description: "some dummy description",
  members
};
