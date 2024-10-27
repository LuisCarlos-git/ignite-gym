import { Center } from '../ui/center';
import { Spinner } from '../ui/spinner';

export const Loading = () => {
  return (
    <Center className="flex-1 bg-gray700">
      <Spinner className="text-green500" />
    </Center>
  );
};
