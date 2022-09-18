import { Avatar } from "../atoms/Avatar";

import styles from "./Avatars.module.scss";

export interface AvatarsProps {
  avatars: {
    src: string;
    alt?: string;
  }[];
}

const NthAvatar = ({ src, alt }: { src: string; alt?: string }) => (
  <div className={styles["avatar"]}>
    <Avatar src={src} alt={alt} />
  </div>
);

export const Avatars = ({ avatars }: AvatarsProps) => {
  return (
    <span className={styles.avatars}>
      {avatars.map((avatar) => (
        <Avatar
          key={avatar.src}
          src={avatar.src}
          alt={avatar.alt || ""}
          size="small"
        />
      ))}
    </span>
  );
};
