import { Fontisto, Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Input, Pressable } from "native-base";
import React, { useState } from "react";

import { DateInputVariant, DateTimeInputProps } from "./Input.types";
import { IconWrapper } from "./components/IconWrapper";

const LeftIcon = ({ variant }: { variant: DateInputVariant }) => {
  const iconProps = {
    size: 24,
    color: "white",
  };

  return (
    <IconWrapper>
      {variant === "date" ? (
        <Fontisto name="date" {...iconProps} />
      ) : (
        <Ionicons name="time-outline" {...iconProps} />
      )}
    </IconWrapper>
  );
};

export const DateTimeInput = (props: DateTimeInputProps) => {
  const { inputVariant } = props;
  const [showPicker, setShowPicker] = useState(false);

  return (
    <>
      <Pressable onPress={() => setShowPicker(true)}>
        <Input
          leftElement={<LeftIcon variant={inputVariant} />}
          isReadOnly
          {...props}
        />
      </Pressable>

      {showPicker && (
        <DateTimePicker
          onChange={() => setShowPicker(false)}
          mode={inputVariant}
          is24Hour
          display="default"
          value={new Date()}
          maximumDate={new Date()}
          onTouchEnd={() => setShowPicker(false)}
        />
      )}
    </>
  );
};
