/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonOwnProps } from "@mui/material";

export type TypeVariant = ButtonOwnProps["variant"]

export interface IButtonProps{
  children: any ;
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  className?: string,
  variant?: TypeVariant,
  color?: ButtonOwnProps["color"]
}