import { MouseEventHandler } from "react";

export interface CoreConceptProps {
  image: string;
  title: string;
  description: string;
}

export interface TabButtonProps {
  children: React.ReactNode;
  onSelect: MouseEventHandler;
  isSelected: boolean;
}
