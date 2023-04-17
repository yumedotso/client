import React from 'react'
import { IconButton } from '../atoms/IconButton'
import { SendICon } from '../atoms/SendIcon'

export interface ShareButtonProps {
	url: string
}

export const ShareButton = (props: ShareButtonProps) => {
	const { url } = props
	const { isCopied, copyToClipboard } = useCopyToClipboard()

	const copyProfileUrl = () => copyToClipboard(url)

	const mode = isCopied ? 'dark' : 'light'

	return (
		<IconButton label="Copy url profile" size="medium" mode={mode} onClick={copyProfileUrl}>
			<SendICon />
		</IconButton>
	)
}

const useCopyToClipboard = () => {
	const [isCopied, setIsCopied] = React.useState(false)

	const copyToClipboard = (text: string) => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(text)
			setIsCopied(true)
			alert('Copied to clipboard')
		}
	}

	return { isCopied, copyToClipboard }
}
