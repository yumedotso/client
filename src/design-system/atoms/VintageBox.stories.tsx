import { Meta, Story } from "@storybook/react";

import { VintageBoxProps, VintageBox } from "./VintageBox";

export default {
  title: "Atoms/VintageBox",
  component: VintageBox
} as Meta;

const Template: Story<VintageBoxProps> = (args) => (
  <VintageBox {...args}>
    <div>
      <h2>Card title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        tincidunt nunc, sit amet aliquet nisl. Nulla facilisi. Donec auctor
        tincidunt nunc, sit amet aliquet nisl. Nulla facilisi. Donec auctor
        tincidunt nunc, sit amet aliquet nisl. Nulla facilisi. Donec auctor
      </p>
    </div>
  </VintageBox>
);

export const Default = Template.bind({});
Default.args = {
  mode: "yellow"
};

export const Purple = Template.bind({});
Purple.args = {
  mode: "purple"
};

export const Green = Template.bind({});
Green.args = {
  mode: "green"
};

export const Pink = Template.bind({});
Pink.args = {
  mode: "pink"
};

export const Orange = Template.bind({});
Orange.args = {
  mode: "orange"
};

export const Simple = Template.bind({});
Simple.args = {
  mode: "simple"
};
