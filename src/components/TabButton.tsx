import type { TabButtonProps } from "../types/componentProps";

export const TabButton: React.FC<TabButtonProps> = ({
  children,
  onSelect,
  isSelected,
}) => {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};
