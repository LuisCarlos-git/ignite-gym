import * as Styles from './styles';
import { Header } from './components/header';
import { Group } from './components/Group';
import { useState } from 'react';
import { GROUPS } from './constants';
import { Groups } from './types';
import { FlatList } from 'react-native';

export function Home() {
  const [selectedGroup, setSelectedGroup] = useState<Groups>(GROUPS[0]);

  return (
    <Styles.Container>
      <Header />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        style={{ marginVertical: 20, minHeight: 44, maxHeight: 44 }}
        data={GROUPS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            isActive={selectedGroup === item}
            name={item}
            onPress={() => setSelectedGroup(item)}
          />
        )}
      />
    </Styles.Container>
  );
}
