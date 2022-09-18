import React from "react";

import { AiOutlineLink } from "react-icons/ai";

import { BsPencil } from "react-icons/bs";

import { Box } from "../atoms/Box";
import { IconButton } from "../atoms/IconButton";
import { Toggle } from "../atoms/Toggle";
import { colors } from "../shared";
import { classNames } from "../shared/classNames";

import styles from "./RowItemCard.module.scss";

export interface RowItemCardProps {
  /**
   * The different colors borderbox
   * @default colors.yellow
   */
  mode: colors;
  /**
   * The id of the input
   */
  id: string;
  /**
   * Initial state of the toggle
   * @default false
   */
  initialState: boolean;
  /**
   * The initial value of the input or title
   * @default "This is the card title"
   */
  initialValue: string;
  /**
   * url the button will open
   * @default undefined
   */
  url?: string;
  onToggleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RowIconButtonProps {
  /**
   * Determines if the button is for editing or opening a link
   */
  edit: boolean;
  /**
   * url the button will open
   */
  url?: string;
  handleFocus: () => void;
}

const RowIconButton = ({
  edit,
  url,
  handleFocus,
  ...props
}: RowIconButtonProps) => {
  if (!edit && url)
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

export const RowItemCard = ({
  mode,
  id,
  url,
  initialState = false,
  initialValue = "This is the card title",
  onToggleChange
}: RowItemCardProps) => {
  // when pencil is types the title will be editable
  const [focused, setFocused] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(() => initialValue);
  const ref = React.createRef<HTMLInputElement>();

  function handleToggleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setInternalValue(ev.target.value);
    onToggleChange && onToggleChange(ev);
  }

  const handleFocus = () => {
    setFocused((prev) => !prev);
  };

  React.useEffect(() => {
    if (focused) return ref?.current?.focus();
    if (!focused) return ref?.current?.blur();
  }, [focused, ref]);

  const handleInputChange = (ev: React.ChangeEvent<HTMLSpanElement>) => {
    console.log(ev.target.innerText);
  };

  return (
    <Box mode={colors[mode]}>
      <div className={classNames(styles.rowItem)}>
        <span className={classNames(styles.linkrow)}>
          {focused ? (
            <span
              ref={ref}
              role="textbox"
              id={`${id}-input`}
              onInput={handleInputChange}
              contentEditable
            >
              {internalValue}
            </span>
          ) : (
            <span>{internalValue}</span>
          )}

          <RowIconButton edit={false} url={url} handleFocus={handleFocus} />
        </span>
        <Toggle
          label={""}
          id={id}
          onChange={handleToggleChange}
          initialState={initialState}
        />
      </div>
    </Box>
  );
};
