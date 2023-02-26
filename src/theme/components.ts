import { IInputProps } from "native-base";

const FOCUS_FIELD_STYLE: IInputProps = {
  opacity: 0.8,
  backgroundColor: "gray.700",
  borderWidth: 1,
  borderColor: "primary.500",
};

const FIELD_DEFAULT_STYLE: IInputProps = {
  bg: "gray.500",
  color: "white",
  opacity: "0.6",
  borderWidth: 0,
  placeholderTextColor: "white",
  rounded: "md",
  p: "3",
  _focus: FOCUS_FIELD_STYLE,
};

export default {
  Input: {
    defaultProps: FIELD_DEFAULT_STYLE,
  },
  TextArea: {
    defaultProps: FIELD_DEFAULT_STYLE,
  },
};
