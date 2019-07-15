import {
  DAYS_OFF,
  FLEXIBLE_SCH,
  REPEATING_SCH,
  CHANGE_COLOR_DAYS_OFF,
  CREATE_HABIT,
  SHOW_HABIT_INSIDER_OVERLAY,
  CREATE_TARGET,
  TOGGLE_DAY_MENU,
  TOGGLE_CARD_INFO,
  HABIT_INSIDER_VALUE,
  NEW_HABITS,
  TOGGLE_INSIDER_DAY_MENU
} from "./types";

export function CreateHabit(state) {
  return {
    type: CREATE_HABIT,
    payload: state
  };
}

export function UpdateHabits(state) {
  return {
    type: NEW_HABITS,
    payload: state
  };
}

export function Habit_InsiderValue(state) {
  return {
    type: HABIT_INSIDER_VALUE,
    payload: state
  };
}

export function ToggleMenuCard() {
  return {
    type: TOGGLE_DAY_MENU
  };
}

export function ToggleinsiderMenu() {
  return {
    type: TOGGLE_INSIDER_DAY_MENU
  };
}

export function ToggleInfoCard() {
  return {
    type: TOGGLE_CARD_INFO
  };
}

export function DaysOffSch(state) {
  return {
    type: DAYS_OFF,
    payload: state
  };
}

export function FlexibleSch(state) {
  return {
    type: FLEXIBLE_SCH,
    payload: state
  };
}

export function RepeatingSch(state) {
  return {
    type: REPEATING_SCH,
    payload: state
  };
}

export function ChangeColor() {
  return {
    type: CHANGE_COLOR_DAYS_OFF
  };
}

export function ShowInsiderOverLay() {
  return {
    type: SHOW_HABIT_INSIDER_OVERLAY
  };
}

export function CreateTarget(state) {
  return {
    type: CREATE_TARGET,
    payload: state
  };
}
