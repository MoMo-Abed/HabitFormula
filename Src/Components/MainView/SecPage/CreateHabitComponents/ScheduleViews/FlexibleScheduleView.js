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
import { FlexibleSch } from "../../../../../Redux/Action/HB_Habits_Actions";
import { toHsv } from "react-native-color-picker";
export class FlexibleScheduleView extends Component {
  state = {
    FlexData: {
      FlexNum: null,
      Value: "week"
    }
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

const mapStateToProps = state => ({
  UpdateState: state.HBHabits.UpdateState
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { FlexibleSch }
)(FlexibleScheduleView);
