import { combineReducers } from "redux";

import HB_Reducer_Main from "./HB_Reducer_Main";
import HB_Reducer_Reward from "./HB_Reducer_Reward";
import HB_Reducer_Habit from "./HB_Reducer_Habit";
export default combineReducers({
  HBMain: HB_Reducer_Main,
  HBRewards: HB_Reducer_Reward,
  HBHabits: HB_Reducer_Habit
});
