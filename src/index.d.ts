declare module "*.png";

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "@env" {
  // FIREBASE
  export const API_KEY: string;
  export const AUTH_DOMAIN: string;
  export const PROJECT_ID: string;
  export const STORAGEBUCKET: string;
  export const MESSAGING_SENDER_ID: string;
  export const APP_ID, MEASUREMENT_ID: string;
}
