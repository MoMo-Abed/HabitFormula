import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Tab,
  Tabs,
  Container,
  Form,
  Label
} from "native-base";
import moment from "moment";

import * as Progress from "react-native-progress";

export class Details extends Component {
  static propTypes = {
    prop: PropTypes
  };

  //Toggle progress Color in Theme Change

  ToggleUnFilledColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#212022";
      case "candy":
        return "#C7372D";
      case "blue":
        return "#0E64A6";
      case "pop":
        return "#7044A9";
      default:
        return null;
    }
  }

  ToggleFormColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#282729";
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

  ToggleFilledColor() {
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

  ToggleContainerColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#212022";
      case "candy":
      case "blue":
      case "pop":
        return "white";
      default:
        return null;
    }
  }

  ToggleTextColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
      case "blue":
      case "pop":
        return "white";
      case "candy":
        return "black";
      default:
        return null;
    }
  }

  render() {
    let { HabitInsider, Habits } = this.props;

    return (
      <Container
        style={{ backgroundColor: this.ToggleContainerColor(), height: "100%" }}
      >
        <Form
          style={[styles.FormView, { backgroundColor: this.ToggleFormColor() }]}
        >
          <View>
            <Label style={styles.LabelSty}>Reasons</Label>
            <View>
              <Text style={styles.TextSty}>
                {Habits[HabitInsider].Reason.Res1}
              </Text>
              <Text style={styles.TextSty}>
                {Habits[HabitInsider].Reason.Res2}
              </Text>
            </View>
          </View>

          <View style={{ paddingBottom: 10 }}>
            <Label style={styles.LabelSty}>Schedule</Label>
            <View>
              <Text style={styles.TextSty}>Everyday except Friday</Text>
            </View>
          </View>
        </Form>

        <Form
          style={[styles.FormView, { backgroundColor: this.ToggleFormColor() }]}
        >
          <View>
            <Label style={styles.LabelSty}>Start Date</Label>
            <View>
              <Text style={styles.TextSty}>
                {moment(Habits[HabitInsider].StartDate).format("DD MMMM YYYY")}
              </Text>
            </View>
          </View>

          <View style={{ paddingBottom: 10 }}>
            <Label style={styles.LabelSty}>Progress</Label>
            <View>
              {/** 
              <Progress.Circle
                color={this.ToggleFilledColor()}
                progress={Habits[HabitInsider].HabitNumberOn / 21}
                size={150}
                showsText
                thickness={8}
                borderWidth={4}
                borderColor={this.ToggleUnFilledColor()}
                unfilledColor={this.ToggleUnFilledColor()}
                indeterminate={false}
                style={{ alignSelf: "center", color: "green" }}
              />
              */}
            </View>

            <View style={{ marginTop: 80 }}>
              <View style={{ flexDirection: "row" }}>
                <Label style={styles.TextSty}>Target Days</Label>
                <Text style={styles.TextSty}>
                  :{`${Habits[HabitInsider].HabitNumberOn} /21 days`}
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Label style={styles.TextSty}>Current Streak</Label>
                <Text style={styles.TextSty}>
                  :{`${Habits[HabitInsider].HabitNumberOn} days`}
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Label style={styles.TextSty}>Longest Streak</Label>
                <Text style={styles.TextSty}>
                  :{`${Habits[HabitInsider].HabitNumberOn} days`}
                </Text>
              </View>
            </View>
          </View>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  FormView: {
    width: "95%",
    alignSelf: "center",
    marginTop: 10
  },
  ItemStyle: {
    width: "95%"
  },
  LabelSty: {
    color: "white",
    fontWeight: "500",
    marginLeft: 18,
    marginTop: 10
  },
  TextSty: {
    color: "white",
    marginLeft: 18,
    marginTop: 10
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle,
  HabitInsider: state.HBHabits.HabitInsider,
  Habits: state.HBHabits.Habits
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
