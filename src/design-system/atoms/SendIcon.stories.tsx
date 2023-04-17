import { Meta, Story } from '@storybook/react'
import { SendICon, SendIconProps } from './SendIcon'

export default {
	title: 'Atoms/SendIcon',
	component: SendICon
} as Meta

export const Default: Story<SendIconProps> = (args) => <SendICon {...args} />
