/* eslint-disable @typescript-eslint/no-explicit-any */


// export type TypeVariant = ButtonOwnProps["variant"]

export interface IButtonProps{
  children: any ;
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  className?: string,
  // variant?: TypeVariant,
  // color?: ButtonOwnProps["color"]
}