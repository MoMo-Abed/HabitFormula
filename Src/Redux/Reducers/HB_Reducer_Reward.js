import { CREATE_REWARD } from "../Action/types";

const initialState = {
  Rewards: [
    {
      RewardTitle: "uyiuyi",
      RewardDesc: "uyi",
      RewardPoints: "44"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_REWARD:
      return {
        ...state,
        Rewards: [action.payload, ...state.Rewards]
      };

    default:
      return state;
  }
}
