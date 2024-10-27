import { VStack } from '@/components/ui/vstack';

import background from '@/assets/background.png';
import { Image } from '@/components/ui/image';

export const SignIn = () => {
  return (
    <VStack className="flex-1 bg-gray700">
      <Image
        source={background}
        alt="plano de fundo"
        className="w-full h-[600px] absolute"
        defaultSource={background}
      />
    </VStack>
  );
};
