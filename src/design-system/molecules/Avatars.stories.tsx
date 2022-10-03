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
      src: "https://robohash.org/468355c6815fe2c112e0de6724ca5c0a?set=set6&bgset=&size=400x400"
    },
    {
      alt: "Núria Soriano",
      src: "https://robohash.org/468355c6815fe2c112e0de6724ca5c0a?set=set5&bgset=&size=400x400"
    },
    {
      alt: "Javier Fernández",
      src: "https://robohash.org/468355c6815fe2c112e0de6724ca5c0a?set=set4&bgset=&size=400x400"
    }
  ]
};
