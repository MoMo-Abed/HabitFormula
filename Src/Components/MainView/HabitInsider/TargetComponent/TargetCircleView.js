import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
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
  Content
} from "native-base";
import { MenuProvider } from "react-native-popup-menu";
import * as Progress from "react-native-progress";

import RewardsCirclePopMenu from "./RewardsCirclePopMenu";
export class TargetCircleView extends Component {
  static propTypes = {
    prop: PropTypes
  };

  //Toggle BackGround Color in Theme Change

  ToggleBGColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#0A090C";
      case "candy":
        return "white";
      case "blue":
        return "#117ACA";
      case "pop":
        return "#8852CE";
      default:
        return null;
    }
  }

  //Toggle Rewards Number  BGColor in Theme Change

  ToggleRewardsColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#0A090C";
      case "candy":
        return "#F4645A";
      case "blue":
        return "#117ACA";
      case "pop":
        return "#8852CE";
      default:
        return null;
    }
  }

  //Toggle RewardsCircle Color in Theme Change

  ToggleRewardsCColor() {
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

  //Toggle RewardsCircle Color in Theme Change

  ToggleColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "white";
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

  RenderElements() {
    let { HabitTarget, HabitInsider, Habits } = this.props;

    if (HabitTarget) {
      return (
        <Content scrollEnabled>
          {HabitTarget.map(target => (
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginLeft: 20 }}>
                <View
                  style={[
                    styles.ReStandView,
                    { backgroundColor: this.ToggleRewardsCColor() }
                  ]}
                />
                <View
                  style={[
                    styles.ReCirView,
                    { backgroundColor: this.ToggleRewardsCColor() }
                  ]}
                >
                  <Text style={styles.ReCirValue}>{target.TargetDays}</Text>
                </View>
              </View>

              <View style={styles.ReText}>
                <View style={{ flexDirection: "row" }}>
                  {/** 
                  <Progress.Bar
                    borderRadius={0}
                    color={this.ToggleColor()}
                    borderColor={this.ToggleColor()}
                    progress={Habits[HabitInsider].HabitNumberOn / 21}
                    width={200}
                    height={20}
                  />
                  */}
                </View>
                <View>
                  <Text>{target.TargetTitle}</Text>
                </View>
              </View>

              <View style={styles.ReCirMenuView}>
                <RewardsCirclePopMenu IconColor="white" />
              </View>
            </View>
          ))}
        </Content>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <MenuProvider>
        <Container
          style={{
            backgroundColor: this.ToggleContainerColor(),
            alignSelf: "center",
            width: "95%"
          }}
        >
          {this.RenderElements()}
        </Container>
      </MenuProvider>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    height: "20%"
  },
  RewardsNumber: {
    textAlign: "center",
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
    marginTop: 20
  },
  ReStandView: {
    height: 30,
    width: 5,
    marginLeft: 10
  },
  ReCirView: {
    backgroundColor: "gray",
    height: 25,
    width: 25,
    borderRadius: 25
  },
  ReCirValue: {
    textAlign: "center",
    color: "white",
    marginTop: 2
  },
  ReText: {
    marginLeft: 50,
    marginTop: 20
  },
  ReCirMenuView: {
    marginLeft: 60,
    marginTop: 5
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle,
  HabitTarget: state.HBHabits.HabitTarget,
  HabitInsider: state.HBHabits.HabitInsider,
  Habits: state.HBHabits.Habits
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetCircleView);
