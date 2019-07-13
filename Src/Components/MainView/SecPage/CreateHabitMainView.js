import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Tab,
  Tabs
} from "native-base";
import CreateHabitTab from "./CreateHabitTab";
export class CreateHabitMainView extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Container>
        <CreateHabitTab />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateHabitMainView);
