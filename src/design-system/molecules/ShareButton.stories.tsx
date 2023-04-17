import { Meta } from '@storybook/react'

import { ShareButton } from './ShareButton'

export default {
	title: 'Molecules/ShareButton',
	component: ShareButton
} as Meta

export const Default = () => <ShareButton url="https://www.google.com" />
