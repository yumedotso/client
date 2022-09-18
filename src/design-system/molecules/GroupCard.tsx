import React from "react";

import { Box } from "../atoms/Box";
import { TextBox } from "../atoms/TextBox";
import { colors } from "../shared";
import { classNames } from "../shared/classNames";
import { Avatars } from "./Avatars";

import styles from "./GroupCard.module.scss";

export interface GroupMember {
  src: string;
  alt: string;
}

export interface GroupCardProps {
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
   * The initial value of the input or title
   * @default "This is the card title"
   */
  initialValue: string;
  /**
   * some dummy description
   */
  description: string;
  /**
   * The users of the group that have access to the list
   */
  members: GroupMember[];
  /**
   * show the edit button or not
   */
  edit?: boolean;
}

export const GroupCard = ({
  mode,
  id,
  description,
  members,
  edit = false,
  initialValue = "This is the card title"
}: GroupCardProps) => {
  const handleInputChange = (ev: React.ChangeEvent<HTMLSpanElement>) => {
    console.log(ev.target.innerText);
  };

  return (
    <Box mode={colors[mode]}>
      <div className={classNames(styles["groupCard"])}>
        <TextBox
          id={`${id}-text-box`}
          size="large"
          showIconButton={edit}
          initialValue={initialValue}
          onInputChange={handleInputChange}
        />
        <TextBox
          id={`${id}-text-box`}
          size="small"
          showIconButton={edit}
          initialValue={description}
          onInputChange={handleInputChange}
        />
        <Avatars avatars={members} />
      </div>
    </Box>
  );
};
