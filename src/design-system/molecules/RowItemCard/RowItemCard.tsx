import React from 'react'

import { GrDrag } from 'react-icons/gr'

import { Box } from '../../atoms/Box'
import { TextBox } from '../../atoms/TextBox'
import { Toggle } from '../../atoms/Toggle'
import { colors } from '../../shared'
import { classNames } from '../../shared/classNames'

import styles from './RowItemCard.module.scss'

export interface RowItemCardProps {
	/**
	 * The different colors borderbox
	 * @default colors.yellow
	 */
	mode: colors
	/**
	 * The id of the input
	 */
	id: string
	/**
	 * Initial state of the toggle
	 * @default false
	 */
	initialState: boolean
	/**
	 * The initial value of the input or title
	 * @default "This is the card title"
	 */
	initialValue: string
	/**
	 * url the button will open
	 * @default undefined
	 */
	url?: string
	onToggleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

export const RowItemCard = ({
	mode,
	id,
	url,
	initialState = false,
	initialValue = 'This is the card title',
	onToggleChange
}: RowItemCardProps) => {
	const [showIcon, setShowIcon] = React.useState(false)

	function handleToggleChange(ev: React.ChangeEvent<HTMLInputElement>) {
		onToggleChange?.(ev)
	}

	const handleInputChange = (ev: React.ChangeEvent<HTMLSpanElement>) => {
		console.log(ev.target.innerText)
	}

	return (
		<Box mode={colors[mode]}>
			<div className={classNames(styles['rowItem'])}>
				{showIcon ? <GrDrag size="18" /> : null}
				<TextBox
					size="small"
					id={`${id}-text-box`}
					url={url}
					showIconButton={true}
					value={initialValue}
					style={{ width: '95%' }}
					onInputChange={handleInputChange}
					onMouseEnter={() => setShowIcon(true)}
					onMouseLeave={() => setShowIcon(false)}
				/>
				<Toggle label={''} id={id} onChange={handleToggleChange} initialState={initialState} />
			</div>
		</Box>
	)
}
