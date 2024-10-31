import * as Styles from './styles';
import { Header } from './components/header';
import { Group } from './components/group';
import { useState } from 'react';
import { GROUPS } from './constants';
import { ListGroup } from './components/list-group';
import { HeaderExercises } from './components/header-exercises';
import { Card } from '@components';
import { ExerciseCard } from './components/exercise-card';

export function Home() {
  const [selectedGroup, setSelectedGroup] = useState<string>(GROUPS[0]);

  return (
    <Styles.Container>
      <Header />
      <Styles.Content>
        <ListGroup
          groups={GROUPS}
          onSelectedGroup={setSelectedGroup}
          selectedGroup={selectedGroup}
        />
        <HeaderExercises />
        <Styles.ExerciseListContent>
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
        </Styles.ExerciseListContent>
      </Styles.Content>
    </Styles.Container>
  );
}
