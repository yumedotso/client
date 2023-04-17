import { Meta, Story } from '@storybook/react'

import { ConnectEditButton, ConnectEditButtonProps } from './ConnectEditButton'

export default {
	title: 'Molecules/ConnectEditButton',
	component: ConnectEditButton
} as Meta

const Template: Story<ConnectEditButtonProps> = (args: ConnectEditButtonProps) => <ConnectEditButton {...args} />
export const LoggedIn = Template.bind({})
LoggedIn.args = {
	isLoggedIn: true,
	connect: () => alert('You are logged in')
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
	isLoggedIn: false
}
