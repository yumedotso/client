export interface SendIconProps {
	width?: string
	color?: string
}

export const SendICon = ({ width = '32', color = '#171D21' }: SendIconProps) => {
	return (
		<svg width={width} height={width} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13.3332 2.66663L2.6665 7.99996L5.79984 9.06663L5.99984 12.6666L7.6665 10.8L9.33317 13.3333L13.3332 2.66663ZM7.6665 9.59996L10.5332 5.66663L6.39984 8.53329L4.39984 7.86663L12.1332 3.99996L9.13317 11.8666L7.6665 9.59996Z"
				fill={color}
			/>
		</svg>
	)
}
