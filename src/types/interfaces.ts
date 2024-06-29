import { ReactChild, ReactNode, FC } from "react";

export interface BoxProps {
  className?: string;
  children: ReactNode;
}
export interface CentedBoxProps {
  children: ReactChild;
}
export interface ButtonProps {
  children: string;
}
export interface HomePageProps {
  title: string;
}
