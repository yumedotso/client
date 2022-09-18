import { classNames } from "../shared/classNames";

import styles from "./Box.module.scss";

export interface BoxProps {
  mode: "green" | "yellow" | "purple" | "blue" | "orange" | "simple" | "pink";
  children: React.ReactNode;
}

export const Box = ({ mode, children, ...props }: BoxProps) => {
  const componentProps = {
    className: classNames(styles["card"], styles[`card--${mode}`]),
    ...props
  };

  return <div {...componentProps}>{children}</div>;
};
