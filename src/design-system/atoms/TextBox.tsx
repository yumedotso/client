import React from "react";

import { AiOutlineLink } from "react-icons/ai";

import { BsPencil } from "react-icons/bs";

import { IconButton } from "./IconButton";
import { classNames } from "../shared/classNames";
import styles from "./TextBox.module.scss";

export interface TextBoxIconProps {
  /**
   * Defined if theres is an incon button at the end of the line
   * @default false
   */
  showIconButton: boolean;
  /**
   * url the button will open, it also decides if the button is for editing or opening a link
   */
  url?: string;
  handleFocus: () => void;
}

const TextBoxIcon = ({
  showIconButton,
  url,
  handleFocus,
  ...props
}: TextBoxIconProps) => {
  if (!showIconButton) return null;

  if (url)
    return (
      <IconButton
        href={url}
        target="_blank"
        size="small"
        label="Open new wish kink"
        mode="simple"
      >
        <AiOutlineLink size="20" />
      </IconButton>
    );

  return (
    <IconButton
      label="edit-wish-element"
      size="small"
      mode="simple"
      onClick={handleFocus}
      {...props}
    >
      <BsPencil size="20" />
    </IconButton>
  );
};

export interface TextBoxProps {
  /**
   * The id of the input
   */
  id: string;
  /**
   * Font size of the input
   */
  size: "small" | "medium" | "large";
  /**
   * Defined if theres is an incon button at the end of the line
   * @default false
   */
  showIconButton: boolean;
  /**
   * The initial value of the input or title
   * @default "This is the card title"
   */
  initialValue: string;
  /**
   * url the button will open it also decides if the button is for editing or opening a link
   * @default undefined
   */
  url?: string;
  onInputChange: (ev: React.ChangeEvent<HTMLSpanElement>) => void;
}

export const TextBox = ({
  id,
  size = "small",
  showIconButton,
  initialValue = "This is the card title",
  url,
  onInputChange
}: TextBoxProps) => {
  // when pencil is types the title will be editable
  const [focused, setFocused] = React.useState(false);

  const ref = React.createRef<HTMLInputElement>();

  const handleFocus = () => {
    setFocused((prev) => !prev);
  };

  React.useEffect(() => {
    if (focused) return ref?.current?.focus();
    if (!focused) return ref?.current?.blur();
  }, [focused, ref]);

  const handleInputChange = (ev: React.ChangeEvent<HTMLSpanElement>) => {
    onInputChange && onInputChange(ev);
  };

  return (
    <span className={classNames(styles["textbox"], styles[`textbox--${size}`])}>
      {focused ? (
        <span
          ref={ref}
          role="textbox"
          id={id}
          onInput={handleInputChange}
          contentEditable
        >
          {initialValue}
        </span>
      ) : (
        <span>{initialValue}</span>
      )}
      <TextBoxIcon
        url={url}
        showIconButton={showIconButton}
        handleFocus={handleFocus}
      />
    </span>
  );
};
