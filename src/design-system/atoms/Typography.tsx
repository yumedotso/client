import styles from './Typography.module.scss'

export interface TypographyProps {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
	children: React.ReactNode
}

export const Typography = ({ type, children }: TypographyProps) => {
	const Component = type

	return <Component className={styles[`typography--${type}`]}>{children}</Component>
}
