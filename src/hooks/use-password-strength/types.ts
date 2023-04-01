import { StrengthScores, StrengthColorSchemes, StrengthValues } from ".";

export interface CheckPasswordStrengthResponse {
  score: StrengthScores;
  strength: StrengthValues;
  feedbackColor: StrengthColorSchemes;
}
