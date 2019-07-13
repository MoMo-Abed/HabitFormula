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
  MARK_DATE_DONE,
  MARK_DATE_DELETE,
  MARK_DATE_FAIL,
  MARK_DATE_SKIP,
  HABIT_INSIDER_VALUE,
  NEW_HABITS
} from "../Action/types";

const initialState = {
  Habits: [
    {
      HabitName: "hello",
      HabitDesc: "try5654546try",
      Reason: {
        Res1: "yyy",
        Res2: "bbb",
        Res3: "ghj"
      },
      Schedule: {
        FixedDaysOffWeek: {
          DaysOff: {
            Su: false,
            Mo: false,
            Tu: false,
            We: false,
            Th: false,
            Fr: false,
            Sa: false
          }
        },

        FlexibleData: {
          HabitNum: "3",
          HMValue: "year"
        },

        RepeatingData: {
          HbNum: "2"
        },

        HMT: {
          Text: "2",
          TimeValue: "times"
        }
      },

      StartDate: "2019-07-09T22:00:00.000Z",
      Archived: true,
      MarkedDateState: {
        "2019-07-14": {
          Done: true
        },
        "2019-07-15": {
          Fail: true
        },
        "2019-07-17": {
          Skip: true
        }
      }
    }
  ],

  HabitMenuCard: false,
  HabitInfoCard: false,

  HabitTarget: [
    {
      TargetTitle: "21 days",
      TargetDays: "21"
    }
  ],

  HabitInsider: {
    HabitName: "hello",
    HabitDesc: "try5654546try",
    Reason: {
      Res1: "yyy",
      Res2: "bbb",
      Res3: "ghj"
    },
    Schedule: {
      FixedDaysOffWeek: {
        DaysOff: {
          Su: false,
          Mo: false,
          Tu: false,
          We: false,
          Th: false,
          Fr: false,
          Sa: false
        }
      },

      FlexibleData: {
        HabitNum: "3",
        HMValue: "year"
      },

      RepeatingData: {
        HbNum: "2"
      },

      HMT: {
        Text: "2",
        TimeValue: "times"
      }
    },

    StartDate: "2019-07-09T22:00:00.000Z",
    Archived: true,
    MarkedDateState: null
  },

  MarkedDateState: {},
  big: {},

  ChangeColorBorder: false,
  ShowHabitInsiderOverLayRe: false
};
let newDaysObject = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case DAYS_OFF:
      return {
        ...state,
        ...this.state.FixedDaysOffWeek,
        FixedDaysOffWeek: action.payload
      };

    case FLEXIBLE_SCH:
      return {
        ...state,
        FlexibleSchedule: action.payload
      };

    case CHANGE_COLOR_DAYS_OFF:
      return {
        ...state,
        ChangeColorBorder: !state.ChangeColorBorder
      };

    case CREATE_HABIT:
      return {
        ...state,
        Habits: [action.payload, ...state.Habits]
      };

    case NEW_HABITS:
      return {
        ...state,
        Habits: [action.payload]
      };

    case MARK_DATE_DONE:
      return {
        ...state,

        MarkedDateState: { ...state.MarkedDateState, ...action.payload }
      };

    case MARK_DATE_FAIL:
      return {
        ...state,

        MarkedDateState: { ...state.MarkedDateState, ...action.payload }
      };

    case MARK_DATE_SKIP:
      return {
        ...state,

        MarkedDateState: { ...state.MarkedDateState, ...action.payload }
      };

    case MARK_DATE_DELETE:
      return {
        ...state,

        MarkedDateState: { ...state.MarkedDateState, ...action.payload }
      };

    case HABIT_INSIDER_VALUE:
      return {
        ...state,
        HabitInsider: action.payload
      };

    case TOGGLE_DAY_MENU:
      return {
        ...state,
        HabitMenuCard: true
      };

    case TOGGLE_CARD_INFO:
      return {
        ...state,
        HabitInfoCard: !state.HabitInfoCard
      };

    case SHOW_HABIT_INSIDER_OVERLAY:
      return {
        ...state,
        ShowHabitInsiderOverLayRe: !state.ShowHabitInsiderOverLayRe
      };

    case CREATE_TARGET:
      return {
        ...state,
        HabitTarget: [...state.HabitTarget, action.payload]
      };

    default:
      return state;
  }
}
