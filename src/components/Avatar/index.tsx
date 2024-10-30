import * as Styles from './styles';

export function Avatar() {
  return (
    <Styles.Image
      source={{
        uri: 'https://github.com/LuisCarlos-git.png',
        width: 64,
        height: 64,
      }}
    />
  );
}
