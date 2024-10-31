import { FlatList } from 'react-native';
import { ListGroupProps } from './types';
import { Group } from '../group';

export function ListGroup({
  groups,
  onSelectedGroup,
  selectedGroup,
}: ListGroupProps) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 8 }}
      style={{ marginVertical: 20, minHeight: 44, maxHeight: 44 }}
      data={groups}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Group
          isActive={selectedGroup === item}
          name={item}
          onPress={() => onSelectedGroup(item)}
        />
      )}
    />
  );
}
