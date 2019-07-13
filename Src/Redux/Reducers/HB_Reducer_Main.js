import {
  TOGGLE_STYLE,
  TOGGLE_DRAWER,
  TOGGLE_CREATE_REWARD_VIEW
} from "../Action/types";

const initialState = {
  ChangeStyle: "candy",
  DrawerState: false,
  RewardCreateView: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_STYLE:
      return { ...state, ChangeStyle: action.payload };

    case TOGGLE_DRAWER:
      return { ...state, DrawerState: !state.DrawerState };

    case TOGGLE_CREATE_REWARD_VIEW:
      return { ...state, RewardCreateView: !state.RewardCreateView };

    default:
      return state;
  }
}
