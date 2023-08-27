import { Avatar } from '../atoms/Avatar'
import { Lead } from '../atoms/Lead'
import styles from './ProfileAvatar.module.scss'

export interface ProfileAvatarProps {
	name: string
	src: string
	tagline: string
}

export const ProfileAvatar = ({ name, src, tagline }: ProfileAvatarProps) => {
	return (
		<div className={styles.container}>
			<span>
				<Avatar src={src} alt={name} />
			</span>
			<section className={styles.textProfile}>
				<Lead bold>{name}</Lead>
				<p className={styles.typography}>{tagline}</p>
			</section>
		</div>
	)
}
