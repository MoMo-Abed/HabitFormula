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
export class ArchivedForm extends Component {
  state = {
    Value: false
  };
  static propTypes = {
    prop: PropTypes
  };

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
        <Item style={styles.ItemSty} fixedLabel>
          <Label style={{ color: this.ToggleTextColor() }}>Archived</Label>
          <Switch
            value={this.props.SwitchValue}
            onValueChange={this.props.OnSwitchChange}
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
  },
  ItemSty: {
    marginTop: 20
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArchivedForm);
