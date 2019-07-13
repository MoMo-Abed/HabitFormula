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

  render() {
    return (
      <Container style={{ backgroundColor: "#C3C3C7", height: "100%" }}>
        <TargetCircleView />
        <OverlayRewardsMenu />

        <FabBtnView />
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Target);
