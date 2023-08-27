import Image from 'next/image'

import styles from './Avatar.module.scss'

export interface AvatarProps {
	src: string
	alt?: string
	size?: 'small' | 'medium' | 'large'
}

const sizes = {
	small: 35,
	medium: 48,
	large: 64
}

export const NthAvatar = ({ alt }: { src: string; alt?: string }) => (
	<div className={styles['avatar']}>
		<div>
			<p>{`+${alt}`}</p>
		</div>
	</div>
)

export const Avatar = ({ src, alt = '', size = 'medium' }: AvatarProps) => {
	const pxSize = sizes[size]

	return (
		<span className={styles['avatar']} style={{ alignItems: 'center', width: `${pxSize}px`, height: `${pxSize}px` }}>
			<Image src={src} alt={alt} width={pxSize} height={pxSize} objectFit="cover" />
		</span>
	)
}
