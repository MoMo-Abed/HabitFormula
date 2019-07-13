import React, { Component } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Form,
  Button,
  Container,
  Item,
  Label,
  Input,
  DatePicker
} from "native-base";
export class DaysofWeek extends Component {
  state = {
    selected: "fixed",
    DayOff: false
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

  render() {
    let { DayOff } = this.state;

    return (
      <Button
        onPress={() => this.setState({ DayOff: !this.state.DayOff })}
        transparent
        style={{ width: 50 }}
      >
        <Text
          style={[
            styles.TextBtn,
            {
              borderBottomColor: !DayOff ? this.ToggleTextColor() : "",
              borderBottomWidth: !DayOff ? 4 : 0,
              color: this.ToggleTextColor()
            }
          ]}
        >
          {this.props.DayLabel}
        </Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  TextBtn: {
    alignSelf: "center",
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 15,
    marginLeft: 10
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle,
  ChangeColorBorder: state.HBMain.ChangeColorBorder
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DaysofWeek);
