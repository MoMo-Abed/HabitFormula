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

import RewardsCirclePopMenu from "./RewardsCirclePopMenu";
export class RewardsSwipeView extends Component {
  static propTypes = {
    prop: PropTypes
  };

  //Toggle BackGround Color in Theme Change

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

  //Toggle Rewards Number  BGColor in Theme Change

  ToggleNumberView() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#1A191B";
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

  ToggleCircleMapView() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#1A191B";
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

  ToggleReText() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "white";
      case "candy":
      case "blue":
      case "pop":
        return "black";
      default:
        return null;
    }
  }

  RenderElements() {
    let { Rewards } = this.props;
    if (Rewards) {
      return (
        <Content scrollEnabled>
          {Rewards.map(Reward => (
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginLeft: 20 }}>
                <View
                  style={[
                    styles.ReStandView,
                    { backgroundColor: this.ToggleCircleMapView() }
                  ]}
                />
                <View
                  style={[
                    styles.ReCirView,
                    { backgroundColor: this.ToggleCircleMapView() }
                  ]}
                >
                  <Text style={styles.ReCirValue}>{Reward.RewardPoints}</Text>
                </View>
              </View>

              <View style={styles.ReText}>
                <Text style={{ color: this.ToggleReText() }}>
                  {Reward.RewardTitle}
                </Text>
                <Text style={{ color: this.ToggleReText() }}>
                  {Reward.RewardDesc}
                </Text>
              </View>

              <View style={styles.ReCirMenuView}>
                <RewardsCirclePopMenu />
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
        <Container style={[{ backgroundColor: this.ToggleContainerColor() }]}>
          <View
            style={[
              styles.MainView,
              { backgroundColor: this.ToggleNumberView() }
            ]}
          >
            <Text style={styles.RewardsNumber}>2</Text>
            {console.log(this.props.Rewards)}
          </View>
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
    marginTop: 10
  },
  ReCirMenuView: {
    marginLeft: 240,
    marginTop: 5
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle,
  Rewards: state.HBRewards.Rewards
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardsSwipeView);
