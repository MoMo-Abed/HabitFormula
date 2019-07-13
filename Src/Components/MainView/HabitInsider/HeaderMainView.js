import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
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
import Agenda from "./Agenda";
import Target from "./Target";
import Details from "./Details";

export class HeaderMainView extends Component {
  static propTypes = {
    prop: PropTypes
  };

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
      <Container style={{ backgroundColor: "#C3C3C7" }}>
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
            <Title>{this.props.HabitInsider.HabitName || ""}</Title>
          </Body>
          <Right>
            <Button onPress={() => Actions.MainView()} transparent>
              <AntDesign name="edit" size={25} color="white" />
            </Button>

            <Button transparent>
              <AntDesign name="filetext1" size={25} color="white" />
            </Button>

            <Button transparent>
              <AntDesign name="barschart" size={25} color="white" />
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
            heading="TARGETS"
          >
            <Target />
          </Tab>
          <Tab
            textStyle={{ fontSize: 12 }}
            tabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            activeTabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            heading="DETAILS"
          >
            <Details />
          </Tab>

          <Tab
            textStyle={{ marginRight: -60, fontSize: 12 }}
            tabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            activeTabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            heading="CALENDAR"
          >
            <Agenda />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle,
  HabitInsider: state.HBHabits.HabitInsider
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderMainView);
