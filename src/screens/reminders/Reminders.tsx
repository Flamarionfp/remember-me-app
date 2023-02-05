import { Entypo } from "@expo/vector-icons";
import { Box } from "native-base";
import { FlatList } from "react-native";

import { ReminderCard, RoundedButton } from "@/src/components";
import { Screen } from "@/src/layouts";
export const Reminders = () => {
  const reminders = [
    {
      id: "1",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vitae ultricies lorem. Sed placerat arcu ac lorem venenatis consectetur. Vivamus fermentum dolor vitae magna consectetur, nec imperdiet nunc volutpat. Duis consectetur suscipit elit, quis.",
      notifyDate: "2023-09-01",
    },
    {
      id: "2",
      content:
        "Pellentesque habitant morbi tristique senectus vivamus fermentum dolor.",
      notifyDate: "2023-09-01",
    },
    {
      id: "3",
      content:
        "Nulla ex ex, hendrerit hendrerit feugiat ullamcorper, hendrerit id urna. Ut quis felis quis arcu dictum fringilla.",
      notifyDate: "2023-09-01",
    },
    {
      id: "4",
      content:
        "Nulla ex ex, hendrerit hendrerit feugiat ullamcorper, hendrerit id urna. Ut quis felis quis arcu dictum fringilla.",
      notifyDate: "2023-09-01",
    },
    {
      id: "5",
      content:
        "Nulla ex ex, hendrerit hendrerit feugiat ullamcorper, hendrerit id urna. Ut quis felis quis arcu dictum fringilla.",
      notifyDate: "2023-09-01",
    },
    {
      id: "6",
      content:
        "Nulla ex ex, hendrerit hendrerit feugiat ullamcorper, hendrerit id urna. Ut quis felis quis arcu dictum fringilla.",
      notifyDate: "2023-09-01",
    },
    {
      id: "7",
      content:
        "Nulla ex ex, hendrerit hendrerit feugiat ullamcorper, hendrerit id urna. Ut quis felis quis arcu dictum fringilla.",
      notifyDate: "2023-09-01",
    },
    {
      id: "8",
      content:
        "Nulla ex ex, hendrerit hendrerit feugiat ullamcorper, hendrerit id urna. Ut quis felis quis arcu dictum fringilla.",
      notifyDate: "2023-09-01",
    },
    {
      id: "9",
      content:
        "Nulla ex ex, hendrerit hendrerit feugiat ullamcorper, hendrerit id urna. Ut quis felis quis arcu dictum fringilla.",
      notifyDate: "2023-09-01",
    },
    {
      id: "10",
      content:
        "Nulla ex ex, hendrerit hendrerit feugiat ullamcorper, hendrerit id urna. Ut quis felis quis arcu dictum fringilla.",
      notifyDate: "2023-09-01",
    },
  ];

  return (
    <Screen>
      <Box mt="5" flex={1}>
        <FlatList
          ItemSeparatorComponent={() => <Box h="4" />}
          data={reminders}
          renderItem={({ item }) => <ReminderCard {...item} />}
          keyExtractor={(item) => item.id}
        />
      </Box>
      <Box position="absolute" bottom={8} right={4}>
        <RoundedButton
          onPress={() => null}
          icon={<Entypo name="plus" size={24} color="white" />}
        />
      </Box>
    </Screen>
  );
};
