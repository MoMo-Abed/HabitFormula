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
  Icon,
  Title,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import FabBtnView from "./TargetComponent/FabBtnView";
import TargetCircleView from "./TargetComponent/TargetCircleView";
import OverlayRewardsMenu from "./TargetComponent/OverlayRewardsMenu";
export class Target extends Component {
  static propTypes = {
    prop: PropTypes
  };

  ToggleContainerColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#363538";
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
      <Container style={{ backgroundColor: this.ToggleContainerColor() }}>
        <TargetCircleView />
        <OverlayRewardsMenu />

        <FabBtnView />
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
)(Target);
