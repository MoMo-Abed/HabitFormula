import { TOGGLE_STYLE, TOGGLE_DRAWER } from "./types";

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
