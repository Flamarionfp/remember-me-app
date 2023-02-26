type SocialService = "facebook" | "google";

export type SocialButtonProps = {
  socialService: SocialService;
  onPress: () => void;
};
