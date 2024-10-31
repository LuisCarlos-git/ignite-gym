import { FlatList } from 'react-native';
import { ExerciseListProps } from './types';
import { ExerciseCard } from '../exercise-card';

export function ExerciseList({ exercises }: ExerciseListProps) {
  return (
    <FlatList
      data={exercises}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 12, paddingTop: 24, paddingBottom: 42 }}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <ExerciseCard
          uri={item.uri}
          title={item.title}
          description={item.description}
        />
      )}
    />
  );
}
