import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CalendarList } from "react-native-toggle-calendar";
import Menu from "./AgendaComponents/Menu";
import moment from "moment";
import { ToggleinsiderMenu } from "../../../Redux/Action/HB_Habits_Actions";
import { UpdateHabits } from "../../../Redux/Action/HB_Habits_Actions";
import { Actions } from "react-native-router-flux";
import CalendarDayComponent from "./AgendaComponents/CalendarDayComponent";
let calendarDate = moment();
let _selectedDay;
let ObjectIndex;
export class Agenda extends Component {
  initialState = {
    [new Date()]: { disabled: true }
  };
  state = {
    calendarDate: calendarDate.format("YYYY-MM-DD"),

    Habits: this.props.Habits,
    _markedDates: this.initialState
  };
  static propTypes = {
    prop: PropTypes
  };

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

  onDayPress = day => {
    _selectedDay = day.dateString;
  };

  OnDonePressed() {
    ObjectIndex = this.props.HabitInsider;
    const updatedMarkedDates = {
      ...this.state._markedDates,
      ...{ [_selectedDay]: { Done: true } }
    };

    let HabitsCopy = JSON.parse(JSON.stringify(this.state.Habits));
    //make changes to ingredients
    HabitsCopy[this.props.HabitInsider].MarkedDateState = {
      ...HabitsCopy[this.props.HabitInsider].MarkedDateState,
      ...updatedMarkedDates
    }; //whatever new inegredints are

    HabitsCopy[this.props.HabitInsider].HabitNumberOn =
      HabitsCopy[this.props.HabitInsider].HabitNumberOn + 1;
    this.props.UpdateHabits(HabitsCopy);
  }

  onFailPressed() {
    ObjectIndex = this.props.HabitInsider;

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
    ObjectIndex = this.props.HabitInsider;

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

  render() {
    return (
      <View>
        {console.log(this.state._markedDates)}
        <View style={{ position: "relative", backgroundColor: "white" }}>
          <Menu
            OnDonePress={() => this.OnDonePressed()}
            OnFailPress={() => this.onFailPressed()}
            OnSkipPress={() => this.onSkipPressed()}
            OnDeletePress
          />
        </View>

        <View style={{ backgroundColor: "red" }}>
          <CalendarList
            theme={{
              calendarBackground: this.ToggleViewColor(),
              monthTextColor: "white"
            }}
            CalenderbackgroundColor={this.ToggleViewColor()}
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={months => {
              console.log("now these months are visible", months);
            }}
            dayComponent={CalendarDayComponent}
            markedDates={
              this.props.Habits[this.props.HabitInsider].MarkedDateState
            }
            markingType={"period"}
            minDate={this.state.calendarDate}
            firstDay={1}
            current={this.state.calendarDate}
            onDayPress={date => {
              this.onDayPress(date);
            }}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={50}
            // Enable or disable scrolling of calendar list
            scrollEnabled={true}
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={true}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle,
  HabitInsider: state.HBHabits.HabitInsider,
  Habits: state.HBHabits.Habits
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  {
    ToggleinsiderMenu,

    UpdateHabits
  }
)(Agenda);
