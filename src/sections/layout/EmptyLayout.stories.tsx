import { Meta } from '@storybook/react'
import { EmptyLayout } from './EmptyLayout'

export default {
	title: 'Sections/EmptyLayout',
	component: EmptyLayout
} as Meta

export const Default = () => <EmptyLayout>Content</EmptyLayout>
