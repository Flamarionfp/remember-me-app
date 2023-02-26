export interface AcionIcon {
  icon: JSX.Element;
  onIconPress: () => void;
}

export type HeaderProps = {
  title?: string;
  isTitleVisible?: boolean;
  allowBackButton?: boolean;
  actionIcons?: AcionIcon[];
};
