import { Meta, Story } from "@storybook/react";

import { Avatars, AvatarsProps } from "./Avatars";

export default {
  title: "Molecules/Avatars",
  component: Avatars
} as Meta;

const Template: Story<AvatarsProps> = (args) => <Avatars {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatars: [
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
  ]
};
