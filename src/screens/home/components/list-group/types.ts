export type ListGroupProps = {
  groups: string[];
  onSelectedGroup: (group: string) => void;
  selectedGroup: string;
};
