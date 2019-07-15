import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Progress from "react-native-progress";
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
export class CardInfo extends Component {
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
        return "white";
      case "blue":
        return "white";
      case "pop":
        return "white";
      default:
        return null;
    }
  }

  //Toggle progress Color in Theme Change

  ToggleColor() {
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

  render() {
    let { HabitInfoCard } = this.props;
    return (
      <View>
        {HabitInfoCard ? (
          <View>
            <View>
              <Label style={[styles.LabelSty, { color: this.ToggleColor() }]}>
                Schedule
              </Label>
              <View>
                <Text style={[styles.TextSty, { color: this.ToggleColor() }]}>
                  Everyday
                </Text>
              </View>
            </View>

            <View style={{ paddingBottom: 10 }}>
              <Label style={[styles.LabelSty, { color: this.ToggleColor() }]}>
                Progress
              </Label>
              <View>
                <Progress.Circle
                  progress={this.props.CircleProgressValue}
                  size={150}
                  thickness={10}
                  showsText
                  borderWidth={4}
                  borderColor={this.ToggleUnFilledColor()}
                  unfilledColor={this.ToggleUnFilledColor()}
                  indeterminate={false}
                  style={{ alignSelf: "center" }}
                  textStyle={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: 50
                  }}
                />
              </View>
              <View
                style={{
                  paddingTop: 10,
                  flexDirection: "row",
                  alignSelf: "center"
                }}
              >
                <Text style={{ color: this.ToggleColor() }}>Target Days:</Text>
                <Text style={{ color: this.ToggleColor() }}>
                  {this.props.TargetDaysValue}
                </Text>
              </View>
            </View>
          </View>
        ) : null}
      </View>
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
    fontWeight: "500",
    marginLeft: 10,
    marginTop: 10
  },
  TextSty: {
    marginLeft: 10,
    marginTop: 10
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle,
  HabitInfoCard: state.HBHabits.HabitInfoCard
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardInfo);
