import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Tab,
  Tabs,
  Container
} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Actions } from "react-native-router-flux";

import CreateHabitTab from "./CreateHabitTab";
import CreateReminderTab from "./CreateReminderTab";
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
        return "#282729";
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
      <Container>
        <Header
          style={{ backgroundColor: this.ToggleHeaderColor() }}
          androidStatusBarColor={this.ToggleStatusColor()}
          hasTabs
        >
          <Left>
            <Button onPress={() => Actions.MainView()} transparent>
              <AntDesign name="arrowleft" size={25} color="white" />
            </Button>
          </Left>
          <Body>
            <Title>HabitFormula</Title>
          </Body>
          <Right>
            <Button onPress={() => Actions.MainView()} transparent>
              <Text style={{ color: "white" }}>Cancel</Text>
            </Button>

            <Button transparent>
              <Text style={{ color: "white" }}>Save</Text>
            </Button>
          </Right>
        </Header>
        <Tabs tabContainerStyle={{ backgroundColor: "red" }}>
          <Tab
            tabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            heading="Tab1"
          >
            <CreateHabitTab />
          </Tab>
          <Tab heading="Tab2">
            <CreateReminderTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

export default connect(
  mapStateToProps,
  {}
)(HeaderMainView);
