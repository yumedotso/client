import { Meta, Story } from '@storybook/react'
import { Typography, TypographyProps } from './Typography'

export default {
	title: 'Atoms/Typography',
	component: Typography
} as Meta

const Template: Story<TypographyProps> = (args) => <Typography {...args} />

export const H1 = Template.bind({})
H1.args = {
	type: 'h1',
	children: 'Typography H1'
}

export const H2 = Template.bind({})
H2.args = {
	type: 'h2',
	children: 'Typography H2'
}

export const H3 = Template.bind({})
H3.args = {
	type: 'h3',
	children: 'Typography H3'
}

export const H4 = Template.bind({})
H4.args = {
	type: 'h4',
	children: 'Typography H4'
}

export const H5 = Template.bind({})
H5.args = {
	type: 'h5',
	children: 'Typography H5'
}

export const H6 = Template.bind({})
H6.args = {
	type: 'h6',
	children: 'Typography H6'
}

export const p = Template.bind({})
p.args = {
	type: 'p',
	children: 'Typography p'
}
