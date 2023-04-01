import { Flex, Text, Progress, Box } from "native-base";

import { PasswordStrengthProps } from "./PasswordStrenght.types";

import { captalize } from "@/src/helpers";
import { usePasswordStrength } from "@/src/hooks";

export const PasswordStrength = (props: PasswordStrengthProps) => {
  const { password = "" } = props;
  const { checkPasswordStrength } = usePasswordStrength();
  const { score, strength, feedbackColor } = checkPasswordStrength("A");

  const getProgressValueByScore = () => {
    const progressValues = {
      1: 40,
      2: 60,
      3: 80,
      4: 100,
    };

    return progressValues.hasOwnProperty(score) ? progressValues[score] : 0;
  };

  return (
    <Box>
      <Flex direction="row" justify="space-between" mb="2">
        <Text fontSize="md" fontWeight="bold" color="gray.200">
          Força da Senha
        </Text>
        <Text fontSize="md" fontWeight="bold" color={`${feedbackColor}.500`}>
          {captalize(strength)}
        </Text>
      </Flex>
      <Progress colorScheme={feedbackColor} value={getProgressValueByScore()} />
    </Box>
  );
};
