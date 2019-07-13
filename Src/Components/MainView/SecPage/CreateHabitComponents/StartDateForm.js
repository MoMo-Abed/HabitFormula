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

export class StartDateForm extends Component {
  state = { chosenDate: new Date() };
  static propTypes = {
    prop: PropTypes
  };

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  ToggleColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "white";
      case "candy":
        return "#F24236";
      case "blue":
        return "black";
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

  render() {
    return (
      <Form
        style={[
          styles.FormView,
          { backgroundColor: this.ToggleFormMainColor() }
        ]}
      >
        <Item fixedLabel>
          <Label style={{ color: this.ToggleTextColor() }}>Start Date</Label>
          <DatePicker
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText={this.state.chosenDate.toString().substr(4, 12)}
            textStyle={{ color: this.ToggleTextColor(), marginRight: 170 }}
            placeHolderTextStyle={{
              color: this.ToggleTextColor(),
              marginRight: 170
            }}
            onDateChange={this.props.newDate}
            disabled={false}
          />
        </Item>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  FormView: {
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    height: 70
  }
});
const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartDateForm);
