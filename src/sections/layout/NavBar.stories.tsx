import { Meta } from '@storybook/react'

import { SettingsNav } from './NavBar'

export default {
	title: 'Layout/Navbar',
	component: SettingsNav
} as Meta

const Template = () => <SettingsNav />

export const Settings = Template.bind({})
