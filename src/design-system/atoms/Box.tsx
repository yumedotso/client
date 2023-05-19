import { classNames } from '../shared/classNames'

import { colors } from '../shared'
import styles from './Box.module.scss'

export interface BoxProps {
	mode: colors
	children: React.ReactNode
	style?: React.CSSProperties
}

export const Box = ({ mode, children, ...props }: BoxProps) => {
	const componentProps = {
		className: classNames(styles['card'], styles[`card--${mode}`]),
		...props
	}

	return <div {...componentProps}>{children}</div>
}
