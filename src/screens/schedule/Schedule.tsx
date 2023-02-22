import { Ionicons } from "@expo/vector-icons";
import { Avatar, Box, Center, Heading, Select, VStack } from "native-base";
import { useState } from "react";

import AppLogo from "../../../assets/icon.png";
import EmailIcon from "../../../assets/icons/email-icon.svg";
import WhatsappIcon from "../../../assets/icons/whatsapp-icon.svg";

import { Button, Dropdown, Input } from "@/src/components";
import { Screen } from "@/src/layouts";

export const Schedule = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSave = async () => {
    try {
      setIsProcessing(true);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 3000);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

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
          <Input placeholder="Descrição" variant="textArea" />
          <Input placeholder="Data da notificação" variant="date" />
          <Input placeholder="Horário da notificação" variant="time" />
          <Dropdown
            placeholder="Como quer receber a notificação?"
            leftIcon={
              <Ionicons name="notifications-sharp" size={24} color="white" />
            }
          >
            <Select.Item
              label="Notificação no celular"
              value="push-notification"
              leftIcon={<Ionicons name="push" size={24} color="gray" />}
            />
            <Select.Item
              label="Whatsapp"
              value="whatsapp"
              leftIcon={<WhatsappIcon width={24} height={24} />}
            />
            <Select.Item
              label="E-mail"
              value="E-mail"
              leftIcon={<EmailIcon width={24} height={24} />}
            />
          </Dropdown>

          <Button
            onPress={() => handleSave()}
            isLoading={isProcessing}
            disabled={isProcessing}
            text="Salvar"
          />
        </VStack>
      </Box>
    </Screen>
  );
};
