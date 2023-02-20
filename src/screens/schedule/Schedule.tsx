import { Avatar, Box, Center, Heading, VStack } from "native-base";

import AppLogo from "../../../assets/icon.png";

import { Button, Input } from "@/src/components";
import { Screen } from "@/src/layouts";

export const Schedule = () => {
  return (
    <Screen isTitleVisible={false}>
      <Box mt="5" flex={1}>
        <VStack justifyContent="center" flex={1} space={8}>
          <Center>
            <Avatar w="90" h="90" source={AppLogo} />
            <Heading mt="4" color="white" fontSize="2xl">
              Agendar Lembrete
            </Heading>
          </Center>

          <Input placeholder="Título" />
          <Input placeholder="Descrição" useTextArea />

          <Button text="Salvar" />
        </VStack>
      </Box>
    </Screen>
  );
};
