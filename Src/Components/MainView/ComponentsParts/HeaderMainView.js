import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Header, Left, Body, Right, Button, Title } from "native-base";
import Entypo from "react-native-vector-icons/Entypo";

import HeaderRightPopMenu from "./HeaderRightPopMenu";
import { ToggleDrawer } from "../../../Redux/Action/MainActions";
export class HeaderMainView extends Component {
  static propTypes = {
    ChangStyle: PropTypes.string.isRequired,
    ToggleDrawer: PropTypes.func.isRequired
  };

  //Toggle Status Bar Color in Theme Change

  ToggleStatusColor() {
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

  //Toggle Header Color in Theme Change

  ToggleHeaderColor() {
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

  render() {
    return (
      <Header
        style={{ backgroundColor: this.ToggleHeaderColor() }}
        androidStatusBarColor={this.ToggleStatusColor()}
      >
        <Left>
          <Button onPress={() => this.props.ToggleDrawer()} transparent>
            <Entypo name="menu" size={25} color="white" />
          </Button>
        </Left>
        <Body>
          <Title>Habits</Title>
        </Body>
        <Right>
          <Button transparent>
            <Entypo name="cloud" size={25} color="white" />
          </Button>

          <Button transparent>
            <HeaderRightPopMenu />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

export default connect(
  mapStateToProps,
  { ToggleDrawer }
)(HeaderMainView);
