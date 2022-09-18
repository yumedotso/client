import NextLink from "next/link";
import React from "react";

import { classNames } from "../shared/classNames";

import styles from "./IconButton.module.scss";

type HtmlButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  href?: undefined;
};

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "children"
> & {
  href: string;
};

export interface IconButtonProps {
  mode?: "light" | "dark" | "simple";
  size?: "large" | "medium" | "small";
  label: string;
  children: React.ReactNode;
}

interface Overload {
  (props: HtmlButtonProps & IconButtonProps): JSX.Element;
  (props: AnchorProps & IconButtonProps): JSX.Element;
}

const hasHref = (props: HtmlButtonProps | AnchorProps): props is AnchorProps =>
  "href" in props;

export const IconButton: Overload = ({
  mode = "light",
  size = "medium",
  label,
  children,
  ...props
}) => {
  const iconSize = size === "large" ? "large" : "medium";

  const componentProps = {
    className: classNames(
      styles["icon-btn"],
      styles[`icon-btn--${mode}`],
      styles[`icon-btn--${size}`]
    ),
    "aria-label": label,
    ...props
  };

  if (hasHref(componentProps)) {
    return (
      <NextLink href={componentProps.href}>
        <a {...componentProps}>{children}</a>
      </NextLink>
    );
  }

  return <button {...componentProps}>{children}</button>;
};
