import React, { useEffect, useState } from 'react'

import { classNames } from '../shared/classNames'

import { Label } from './Label'

import styles from './Input.module.scss'

interface BaseInputProps {
	/**
	 * The id of the input
	 */
	id: string
	/**
	 * The label of the input
	 */
	label: string
	hideLabel?: boolean
	placeholder?: string
	value?: string | number
	size?: 'small' | 'medium' | 'simple'
	fullWidth?: boolean
	required?: boolean
	ref?: React.RefObject<HTMLInputElement>
	onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void
	onFocus?: (ev: React.FocusEvent<HTMLInputElement>) => void
	onBlur?: (ev: React.FocusEvent<HTMLInputElement>) => void
}

interface TextInputProps extends BaseInputProps {
	type?: 'text' | 'email' | 'password'
	min?: never
	max?: never
}

interface NumberInputProps extends BaseInputProps {
	type: 'number'
	min?: number
	max?: number
}

export type InputProps = NumberInputProps | TextInputProps

export const Input = ({
	id,
	size = 'medium',
	type = 'text',
	label,
	value = '',
	hideLabel = false,
	required = false,
	onChange,
	...props
}: InputProps) => {
	const [internalvalue, setInternalValue] = useState(value)

	const isFullWidth = props.fullWidth

	useEffect(() => {
		setInternalValue(value)
	}, [value])

	function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
		setInternalValue(ev.target.value)
		onChange && onChange(ev)
	}

	return (
		<div>
			<Label isHidden={hideLabel} htmlFor={id}>
				{label}
			</Label>
			<input
				className={classNames(styles.input, styles[`input--${size}`])}
				onChange={handleChange}
				id={id}
				name={id}
				value={internalvalue}
				type={type}
				required={required}
				{...props}
			/>
		</div>
	)
}
