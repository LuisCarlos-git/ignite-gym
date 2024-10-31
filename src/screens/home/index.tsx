import * as Styles from './styles';
import { Header } from './components/header';
import { useState } from 'react';
import { EXERCISES, GROUPS } from './constants';
import { ListGroup } from './components/list-group';
import { HeaderExercises } from './components/header-exercises';
import { ExerciseList } from './components/exercise-list';

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
        <ExerciseList exercises={EXERCISES} />
      </Styles.Content>
    </Styles.Container>
  );
}
