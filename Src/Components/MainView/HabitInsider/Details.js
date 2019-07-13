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

  render() {
    return (
      <Container style={{ backgroundColor: "#C3C3C7", height: "100%" }}>
        <Form style={styles.FormView}>
          <View>
            <Label style={styles.LabelSty}>Reasons</Label>
            <View>
              <Text style={styles.TextSty}>
                {this.props.HabitInsider.Reason.Res1}
              </Text>
              <Text style={styles.TextSty}>
                {this.props.HabitInsider.Reason.Res2}
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

        <Form style={styles.FormView}>
          <View>
            <Label style={styles.LabelSty}>Start Date</Label>
            <View>
              <Text style={styles.TextSty}>
                {moment(this.props.HabitInsider.StartDate).format(
                  "DD MMMM YYYY"
                )}
              </Text>
            </View>
          </View>

          <View style={{ paddingBottom: 10 }}>
            <Label style={styles.LabelSty}>Progress</Label>
            <View>
              <Progress.Circle
                progress={0.1}
                size={150}
                thickness={10}
                showsText
                borderWidth={4}
                borderColor={this.ToggleUnFilledColor()}
                unfilledColor={this.ToggleUnFilledColor()}
                indeterminate={false}
                style={{ alignSelf: "center" }}
                textStyle={{ color: "gray", fontWeight: "bold", fontSize: 50 }}
              />
            </View>

            <View>
              <View style={{ flexDirection: "row" }}>
                <Label style={styles.TextSty}>Target Days</Label>
                <Text style={styles.TextSty}>:2/21 days</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Label style={styles.TextSty}>Current Streak</Label>
                <Text style={styles.TextSty}>:2 days</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Label style={styles.TextSty}>Longest Streak</Label>
                <Text style={styles.TextSty}>:2 days</Text>
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
    backgroundColor: "white",
    width: "95%",
    alignSelf: "center",
    marginTop: 10
  },
  ItemStyle: {
    width: "95%"
  },
  LabelSty: {
    color: "black",
    fontWeight: "500",
    marginLeft: 18,
    marginTop: 10
  },
  TextSty: {
    color: "black",
    marginLeft: 18,
    marginTop: 10
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle,
  HabitInsider: state.HBHabits.HabitInsider
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
