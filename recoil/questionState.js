import { atom } from "recoil";
import { v1 } from "uuid";

export const questionValueState = atom({
  key: `question ${v1()}`,
  default: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
});
