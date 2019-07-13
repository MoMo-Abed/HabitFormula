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
export class RepeatingScheduleView extends Component {
  state = {
    text: ""
  };
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepeatingScheduleView);
