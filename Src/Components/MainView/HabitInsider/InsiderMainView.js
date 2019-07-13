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
  Title
} from "native-base";
import HeaderMainView from "./HeaderMainView";
export class InsiderMainView extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Container style={{ backgroundColor: "#C3C3C7" }}>
        <HeaderMainView />
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsiderMainView);
