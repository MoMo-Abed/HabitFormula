import { CREATE_REWARD } from "./types";

export function CreateReward(state) {
  return {
    type: CREATE_REWARD,
    payload: state
  };
}
