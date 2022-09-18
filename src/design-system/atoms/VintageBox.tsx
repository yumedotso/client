import { classNames } from "../shared/classNames";

import styles from "./VintageCard.module.scss";

export interface VintageBoxProps {
  mode: "green" | "yellow" | "purple" | "blue" | "orange" | "simple" | "pink";
  children: React.ReactNode;
  onClick: () => void;
}

export const VintageBox = ({ mode, children, ...props }: VintageBoxProps) => {
  const componentProps = {
    className: classNames(styles["card"], styles[`card--${mode}`]),
    ...props
  };

  return <div {...componentProps}>{children}</div>;
};
