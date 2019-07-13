import {
  TOGGLE_STYLE,
  TOGGLE_DRAWER,
  TOGGLE_CREATE_REWARD_VIEW
} from "./types";

export function ToggleTheme(state) {
  return {
    type: TOGGLE_STYLE,
    payload: state
  };
}

export function ToggleDrawer() {
  return {
    type: TOGGLE_DRAWER
  };
}

export function ToggleRewardsView() {
  return {
    type: TOGGLE_CREATE_REWARD_VIEW
  };
}
