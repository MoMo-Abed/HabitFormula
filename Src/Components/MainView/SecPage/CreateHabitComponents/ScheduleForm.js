import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
import DaysOftheWeekMainCom from "./ScheduleViews/DaysOftheWeekMainCom";
import DaysofWeek from "./ScheduleViews/DaysofWeek";

export class ScheduleForm extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {
    DayOff: false,
    DayOffNewState: false,
    selected: "fixed"
  };

  //Toggle Header Color in Theme Change

  ToggleColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#0A090C";
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

  ToggleFormMainColor() {
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

  ToggleTextColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
      case "candy":
      case "blue":
      case "pop":
        return "white";
      default:
        return null;
    }
  }

  ToggleTextMenuColor() {
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

  //toggle schedule type on dropdown changes

  ToggleView() {
    let toggle = this.state.selected;

    switch (toggle) {
      case "fixed":
        return (
          <View>
            <Label style={[styles.LabelSty, { color: this.ToggleTextColor() }]}>
              When do you want to perform the habit?
            </Label>
            <View
              style={{ flexDirection: "row", marginLeft: 10, width: "100%" }}
            >
              <DaysofWeek DayLabel="Su" />
              <DaysofWeek DayLabel="Mo" />

              <DaysofWeek DayLabel="Tu" />

              <DaysofWeek DayLabel="We" />

              <DaysofWeek DayLabel="Th" />
              <DaysofWeek DayLabel="Fr" />

              <DaysofWeek DayLabel="St" />
            </View>
          </View>
        );
      case "flexible":
        return (
          <View>
            <Label style={[styles.LabelSty, { color: this.ToggleTextColor() }]}>
              How often do you want to perform the habit?
            </Label>
            <View style={{ flexDirection: "row" }}>
              <Input
                value={this.props.FlexibleHabitNum}
                onChangeText={this.props.FlexibleTextChange}
                style={{
                  marginTop: 10,
                  marginLeft: 15,
                  width: 30,
                  color: this.ToggleTextColor()
                }}
                selectionColor={this.ToggleTextColor()}
                keyboardType="number-pad"
                placeholder="num"
                placeholderTextColor={this.ToggleTextColor()}
              />
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 25,
                  marginRight: 5,
                  color: this.ToggleTextColor()
                }}
              >
                days per
              </Text>
              <Picker
                style={{ width: "45%", marginTop: 10, marginRight: 0 }}
                mode="dropdown"
                headerBackButtonText="Baaack!"
                selectedValue={this.props.FlexibleValue}
                onValueChange={this.props.FlexibleValueChange}
              >
                <Picker.Item label="week" value="week" />
                <Picker.Item label="month" value="month" />
                <Picker.Item label="year" value="year" />
              </Picker>
            </View>
          </View>
        );
      case "repeating":
        return (
          <View>
            <Label style={[styles.LabelSty, { color: this.ToggleTextColor() }]}>
              Repeating every second/third/...day
            </Label>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 25,
                  marginLeft: 20,
                  color: this.ToggleTextColor()
                }}
              >
                Every
              </Text>

              <Input
                value={this.props.RepeatingTextValue}
                onChangeText={this.props.RepeatingTextChange}
                style={{
                  marginTop: 10,
                  marginLeft: 20,
                  width: 30,
                  color: this.ToggleTextColor()
                }}
                selectionColor={this.ToggleTextColor()}
                keyboardType="number-pad"
                placeholder="num"
                placeholderTextColor={this.ToggleTextColor()}
              />

              <Text
                style={{
                  fontSize: 15,
                  marginTop: 25,
                  marginRight: 190,
                  color: this.ToggleTextColor()
                }}
              >
                days
              </Text>
            </View>
          </View>
        );

      default:
        return null;
    }
  }

  render() {
    return (
      <Form
        style={[
          styles.FormView,
          { backgroundColor: this.ToggleFormMainColor() }
        ]}
      >
        <View>
          <Label style={[styles.LabelSty, { color: this.ToggleTextColor() }]}>
            Select a Schedule
          </Label>
          <Picker
            style={{
              marginBottom: 10,
              width: "95%",
              alignSelf: "center"
            }}
            mode="dropdown"
            headerBackButtonText="Baaack!"
            selectedValue={this.state.selected}
            onValueChange={value => this.setState({ selected: value })}
          >
            <Picker.Item
              color={this.ToggleTextColor()}
              label="Fixed"
              value="fixed"
            />
            <Picker.Item
              color={this.ToggleTextColor()}
              label="Flexible"
              value="flexible"
            />
            <Picker.Item
              color={this.ToggleTextColor()}
              label="Repeating"
              value="repeating"
            />
          </Picker>
        </View>
        <View style={[styles.ItemStyle, { marginBottom: 190 }]} stackedLabel>
          {this.ToggleView()}

          <View style={[styles.ItemStyle]}>
            <Label style={[styles.LabelSty, { color: this.ToggleTextColor() }]}>
              How many times do you want to perform the habit?
            </Label>

            <View style={{ flexDirection: "row" }}>
              <Input
                value={this.props.HMTvalue}
                onChangeText={this.props.OnHTWChange}
                style={{
                  marginTop: 10,
                  marginLeft: 15,
                  width: 30,
                  color: this.ToggleTextColor()
                }}
                selectionColor={this.ToggleTextColor()}
                keyboardType="number-pad"
                placeholder="num"
                placeholderTextColor={this.ToggleTextColor()}
              />
              <Picker
                style={{ width: "45%", marginTop: 10, marginRight: 55 }}
                mode="dropdown"
                headerBackButtonText="Baaack!"
                selectedValue={this.props.HMTPickerValue}
                onValueChange={this.props.HWTPickerChangeValue}
              >
                <Picker.Item label="times" value="times" />
                <Picker.Item label="hours" value="hours" />
                <Picker.Item label="litres" value="litres" />
                <Picker.Item label="metres" value="metres" />
              </Picker>
            </View>
          </View>
        </View>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  FormView: {
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    height: 300
  },
  ItemStyle: {
    width: "95%"
  },
  LabelSty: {
    fontWeight: "400",
    marginLeft: 18,
    marginTop: 10
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleForm);
