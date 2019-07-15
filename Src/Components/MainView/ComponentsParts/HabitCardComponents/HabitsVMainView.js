import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Form,
  Item,
  Input,
  Content,
  Label
} from "native-base";
import { MenuProvider } from "react-native-popup-menu";
import HabitRightPopMenu from "./HabitRightPopMenu";
import { Calendar } from "react-native-toggle-calendar";
import CalendarHeaderComponent from "./CalendarHeaderComponent";
import CalendarDayComponent from "./CalendarDayComponent";
import moment from "moment";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Menu from "./Menu";
import ValuesCard from "./ValuesCard";
import CardInfo from "./CardInfo";

import {
  ToggleMenuCard,
  MarkDateDone,
  MarkDateDelete,
  MarkDateFail,
  MarkDateSkip,
  Habit_InsiderValue,
  UpdateHabits
} from "../../../../Redux/Action/HB_Habits_Actions";
import { Actions } from "react-native-router-flux";

let calendarDate = moment();
let _selectedDay;
let ObjectIndex;
export class HabitsVMainView extends Component {
  initialState = {
    [new Date()]: { disabled: true }
  };
  state = {
    calendarDate: calendarDate.format("YYYY-MM-DD"),
    horizontal: false,
    Habits: this.props.Habits,
    DateSelected: "",
    MarkingDate: [],
    marked: null,
    _markedDates: this.initialState
  };
  static propTypes = {
    prop: PropTypes
  };

  ToggleColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#363538";
      case "candy":
        return "white";
      case "blue":
        return "white";
      case "pop":
        return "white";
      default:
        return null;
    }
  }

  ToggleHabitNameColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "white";
      case "candy":
        return "white";
      case "blue":
        return "white";
      case "pop":
        return "white";
      default:
        return null;
    }
  }

  ToggleViewColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#1A191B";
      case "candy":
        return "#F24236";
      case "blue":
        return "#117ACA";
      case "pop":
        return "#8852CE";
      default:
        return null;
    }
  }

  onDayPress = (day, index) => {
    _selectedDay = day.dateString;
    ObjectIndex = index;
  };

  OnDonePressed() {
    const updatedMarkedDates = {
      ...this.state._markedDates,
      ...{ [_selectedDay]: { Done: true } }
    };

    let HabitsCopy = JSON.parse(JSON.stringify(this.state.Habits));
    //make changes to ingredients
    HabitsCopy[ObjectIndex].MarkedDateState = {
      ...HabitsCopy[ObjectIndex].MarkedDateState,
      ...updatedMarkedDates
    }; //whatever new inegredints are

    HabitsCopy[ObjectIndex].HabitNumberOn =
      HabitsCopy[ObjectIndex].HabitNumberOn + 1;

    this.setState({
      Habits: HabitsCopy
    });
    this.props.UpdateHabits(HabitsCopy);
  }

  onFailPressed() {
    const updatedMarkedDates = {
      ...this.state._markedDates,
      ...{ [_selectedDay]: { Fail: true } }
    };

    let HabitsCopy = JSON.parse(JSON.stringify(this.state.Habits));
    //make changes to ingredients
    HabitsCopy[ObjectIndex].MarkedDateState = {
      ...HabitsCopy[ObjectIndex].MarkedDateState,
      ...updatedMarkedDates
    }; //whatever new inegredints are

    this.setState({
      Habits: HabitsCopy
    });
    this.props.UpdateHabits(HabitsCopy);
  }

  onSkipPressed() {
    const updatedMarkedDates = {
      ...this.state._markedDates,
      ...{ [_selectedDay]: { Skip: true } }
    };

    let HabitsCopy = JSON.parse(JSON.stringify(this.state.Habits));
    //make changes to ingredients
    HabitsCopy[ObjectIndex].MarkedDateState = {
      ...HabitsCopy[ObjectIndex].MarkedDateState,
      ...updatedMarkedDates
    }; //whatever new inegredints are

    HabitsCopy[ObjectIndex].HabitNumberOn =
      HabitsCopy[ObjectIndex].HabitNumberOn + 1;

    this.setState({
      Habits: HabitsCopy
    });
    this.props.UpdateHabits(HabitsCopy);
  }

  RenderHabits() {
    let { Habits } = this.state;
    if (Habits) {
      return (
        <Content style={{ width: "95%", alignSelf: "center" }} scrollEnabled>
          {Habits.map((habit, index) => (
            <TouchableHighlight
              style={{ marginTop: 20 }}
              onPress={() => {
                this.props.Habit_InsiderValue(index), Actions.HabitInsider();
              }}
            >
              <View style={{ backgroundColor: this.ToggleViewColor() }}>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Text
                    style={{
                      marginLeft: 10,
                      color: this.ToggleHabitNameColor()
                    }}
                  >
                    {habit.HabitName}
                  </Text>
                  <View style={{ marginLeft: 330 }}>
                    <HabitRightPopMenu
                      IconColor={this.ToggleHabitNameColor()}
                    />
                  </View>
                </View>
                <View style={{ alignSelf: "center", width: "95%" }}>
                  <Calendar
                    style={{ backgroundColor: this.ToggleViewColor() }}
                    markedDates={this.state.Habits[index].MarkedDateState}
                    markingType={"period"}
                    minDate={this.state.calendarDate}
                    hideExtraDays={true}
                    firstDay={1}
                    dayComponent={CalendarDayComponent}
                    calendarHeaderComponent={CalendarHeaderComponent}
                    current={this.state.calendarDate}
                    horizontal={true}
                    onDayPress={date => {
                      this.onDayPress(date, index);
                      this.props.ToggleMenuCard();
                    }}
                    horizontalEndReachedThreshold={5}
                    horizontalStartReachedThreshold={0}
                    loading={this.state.calendarLoading}
                    showPastDatesInHorizontal={1}
                    hideArrows={true}
                  />
                  {console.log(this.props.Habits)}
                </View>
                <Menu
                  OnDonePress={() => this.OnDonePressed()}
                  OnFailPress={() => this.onFailPressed()}
                  OnSkipPress={() => this.onSkipPressed()}
                  OnDeletePress
                />
                <ValuesCard
                  CalHabitNum={`${habit.HabitNumberOn}/21 `}
                  DaysHabitOn={habit.HabitNumberOn}
                />
                <CardInfo
                  TargetDaysValue={`${habit.HabitNumberOn}/21 days`}
                  CircleProgressValue={habit.HabitNumberOn / 21}
                />
              </View>
            </TouchableHighlight>
          ))}
        </Content>
      );
    } else {
      console.log("empty");
    }
  }

  render() {
    return (
      <Container
        style={{
          width: "100%",
          alignSelf: "center",
          backgroundColor: this.ToggleColor(),
          height: "100%"
        }}
      >
        {this.RenderHabits()}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  MenuDayView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  LabelSty: {
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
    marginTop: 10
  },
  TextSty: {
    color: "black",
    marginLeft: 10,
    marginTop: 10
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle,
  Habits: state.HBHabits.Habits,
  MarkedDateState: state.HBHabits.MarkedDateState,
  big: state.HBHabits.big
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  {
    ToggleMenuCard,

    Habit_InsiderValue,
    UpdateHabits
  }
)(HabitsVMainView);
