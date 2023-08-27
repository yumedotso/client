import React from 'react'

import { AiOutlineClose, AiOutlineLink } from 'react-icons/ai'

import { BsPencil } from 'react-icons/bs'

import { classNames } from '../shared/classNames'
import { IconButton } from './IconButton'
import styles from './TextBox.module.scss'

export interface TextBoxProps extends React.HTMLAttributes<HTMLSpanElement> {
	/**
	 * The id of the input
	 */
	id: string
	/**
	 * Font size of the input
	 */
	size: 'small' | 'medium' | 'large'
	/**
	 * Defined if theres is an incon button at the end of the line
	 * @default false
	 */
	showIconButton: boolean
	/**
	 * The initial value of the input or title
	 * @default "This is the card title"
	 */
	value: string
	/**
	 * url the button will open it also decides if the button is for editing or opening a link
	 * @default undefined
	 */
	url?: string
	/**
	 * width of the
	 */
	style?: React.CSSProperties
	onInputChange: (ev: React.ChangeEvent<HTMLSpanElement>) => void
}

export const TextBox = ({
	id,
	size = 'small',
	showIconButton,
	value = 'This is the card title',
	url,
	style,
	onInputChange,
	...props
}: TextBoxProps) => {
	// when pencil is types the title will be editable
	const [focused, setFocused] = React.useState(false)

	const ref = React.createRef<HTMLInputElement>()

	const handleFocus = () => {
		setFocused((prev) => !prev)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			// Click occurred outside the TextBox component
			setFocused(false)
		}
	}

	React.useEffect(() => {
		if (focused) {
			ref?.current?.focus()
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			ref?.current?.blur()
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [focused])

	const handleInputChange = (ev: React.ChangeEvent<HTMLSpanElement>) => {
		onInputChange?.(ev)
	}

	return (
		<span className={classNames(styles['textbox'], styles[`textbox--${size}`])} style={style} {...props}>
			{focused ? (
				<input
					ref={ref}
					id={id}
					role="textbox"
					style={{ width: '100%' }}
					defaultValue={value}
					onChange={handleInputChange}
					contentEditable
				/>
			) : (
				<span>{value}</span>
			)}
			{focused ? (
				<IconButton size="small" label="edit-wish-element" mode="simple" onClick={handleFocus}>
					<AiOutlineClose size="18" />
				</IconButton>
			) : (
				<TextBoxIcon url={url} showIconButton={showIconButton} handleFocus={handleFocus} />
			)}
		</span>
	)
}

export interface TextBoxIconProps {
	/**
	 * Defined if theres is an incon button at the end of the line
	 * @default false
	 */
	showIconButton: boolean
	/**
	 * url the button will open, it also decides if the button is for editing or opening a link
	 */
	url?: string
	size?: 'large' | 'medium' | 'small'
	handleFocus: () => void
}

const TextBoxIcon = ({ showIconButton, url, size = 'small', handleFocus, ...props }: TextBoxIconProps) => {
	if (!showIconButton) return null

	if (url)
		return (
			<IconButton href={url} target="_blank" size={size} label="Open new wish kink" mode="simple">
				<AiOutlineLink size="20" />
			</IconButton>
		)

	return (
		<IconButton label="edit-wish-element" size={size} mode="simple" onClick={handleFocus} {...props}>
			<BsPencil size="16" />
		</IconButton>
	)
}
