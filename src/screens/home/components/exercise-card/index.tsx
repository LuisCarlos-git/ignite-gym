import { Card } from '@components';
import * as Styles from './styles';
import { ChevronRight } from 'lucide-react-native';
import { theme } from '@styles/theme';
import { TouchableOpacity } from 'react-native';
import { ExerciseCardProps } from './types';

export function ExerciseCard(props: ExerciseCardProps) {
  return (
    <TouchableOpacity {...props} activeOpacity={0.9}>
      <Card>
        <Styles.Image
          source={{
            uri: 'https://github.com/LuisCarlos-git.png',
            width: 64,
            height: 64,
          }}
        />
        <Styles.Content>
          <Styles.Heading>Exercício</Styles.Heading>
          <Styles.Text>3 séries x 12 repetições</Styles.Text>
        </Styles.Content>
        <ChevronRight size={24} color={theme.colors.gray200} />
      </Card>
    </TouchableOpacity>
  );
}
