import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Form,
  Button,
  Container,
  Item,
  Label,
  Input,
  DatePicker,
  Picker
} from "native-base";
import DaysofWeek from "./DaysofWeek";

export default class DaysOftheWeekMainCom extends Component {
  render() {
    return (
      <View>
        <Label style={styles.LabelSty}>
          When do you want to perform the habit?
        </Label>
        <View style={{ flexDirection: "row", marginLeft: 10, width: "100%" }}>
          <DaysofWeek PressDayOff={() => console.log("hi")} DayLabel="Su" />
          <DaysofWeek PressDayOff={this.props.PressDayOffNew} DayLabel="Mo" />
          <DaysofWeek PressDayOff={this.props.PressDayOffNew} DayLabel="Tu" />
          <DaysofWeek PressDayOff={this.props.PressDayOffNew} DayLabel="We" />
          <DaysofWeek PressDayOff={this.props.PressDayOffNew} DayLabel="Th" />
          <DaysofWeek PressDayOff={this.props.PressDayOffNew} DayLabel="Fr" />
          <DaysofWeek PressDayOff={console.log("fi")} DayLabel="St" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FormView: {
    backgroundColor: "white",
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    height: 300
  },
  ItemStyle: {
    width: "95%"
  },
  LabelSty: {
    color: "black",
    fontWeight: "400",
    marginLeft: 18,
    marginTop: 10
  }
});
