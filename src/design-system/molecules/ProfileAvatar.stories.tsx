import { Meta, Story } from '@storybook/react'

import { ProfileAvatar, ProfileAvatarProps } from './ProfileAvatar'

export default {
	title: 'Molecules/ProfileAvatar',
	component: ProfileAvatar
} as Meta

const Template: Story<ProfileAvatarProps> = (args: ProfileAvatarProps) => <ProfileAvatar {...args} />

export const Default = Template.bind({})
Default.args = {
	name: 'John Doe',
	src: 'https://robohash.org/468355c6815fe2c112e0de6724ca5c0a?set=set5&bgset=&size=400x400',
	tagline: 'Lorem ipsum dolor sit amet'
}
