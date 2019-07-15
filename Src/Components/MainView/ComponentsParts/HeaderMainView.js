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

import HeaderRightPopMenu from "./HeaderRightPopMenu";
import { ToggleDrawer } from "../../../Redux/Action/MainActions";
import RewardsSwipeView from "./Reward/RewardsSwipeView";
import HabitsVMainView from "./HabitCardComponents/HabitsVMainView";
import Charts_MainView from "./Charts/Charts_MainView";
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

  //
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
        <Header
          style={{ backgroundColor: this.ToggleHeaderColor() }}
          androidStatusBarColor={this.ToggleStatusColor()}
          hasTabs
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

        <Tabs
          tabContainerStyle={{
            backgroundColor: this.ToggleHeaderColor(),
            height: 20,
            paddingBottom: 5
          }}
          tabBarUnderlineStyle={{ backgroundColor: "white" }}
        >
          <Tab
            textStyle={{ marginLeft: -60, fontSize: 12 }}
            tabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            activeTabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            heading="Rewards"
          >
            <RewardsSwipeView />
          </Tab>
          <Tab
            textStyle={{ fontSize: 12 }}
            tabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            activeTabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            heading="Habits"
          >
            <HabitsVMainView />
          </Tab>

          <Tab
            textStyle={{ marginRight: -60, fontSize: 12 }}
            tabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            activeTabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            heading="Graphs"
          >
            <Charts_MainView />
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
  { ToggleDrawer }
)(HeaderMainView);
