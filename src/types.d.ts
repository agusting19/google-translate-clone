import { AUTO_LENGUAGE, SUPORTED_LANGUAGES } from "./constants";

export type Lenguage = keyof typeof SUPORTED_LANGUAGES;
export type AutoLenguage = typeof AUTO_LENGUAGE;
export type FromLenguage = Lenguage | AutoLenguage;

export interface State {
  fromLanguage: string;
  toLanguage: string;
  fromText: string;
  result: string;
  loading: boolean;
}

export type Action =
  | { type: "INTERCHANGE_LANGUAGES" }
  | { type: "SET_FROM_LANGUAGE"; payload: string }
  | { type: "SET_TO_LANGUAGE"; payload: string }
  | { type: "SET_FROM_TEXT"; payload: string }
  | { type: "SET_RESULT"; payload: boolean };
