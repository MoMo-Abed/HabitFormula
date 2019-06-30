import { TOGGLE_STYLE, TOGGLE_DRAWER } from "../Action/types";

const initialState = {
  ChangeStyle: "candy",
  DrawerState: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_STYLE:
      return { ...state, ChangeStyle: "dark" };

    case TOGGLE_DRAWER:
      return { ...state, DrawerState: !state.DrawerState };

    default:
      return state;
  }
}
