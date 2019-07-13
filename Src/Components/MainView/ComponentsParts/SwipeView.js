import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Swiper from "react-native-swiper";
import RewardsSwipeView from "./Reward/RewardsSwipeView";
import HabitsVMainView from "./HabitCardComponents/HabitsVMainView";
export class SwipeView extends Component {
  static propTypes = {
    prop: PropTypes
  };

  //Toggle Container  Color on Theme Change

  ToggleColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#363538";
      case "candy":
      case "blue":
      case "pop":
        return "#D1D1D1";

      default:
        return null;
    }
  }

  render() {
    return (
      <Swiper
        showsPagination={false}
        style={{ backgroundColor: this.ToggleColor(), height: "100%" }}
      >
        <View style={styles.slide1}>
          <HabitsVMainView />
        </View>
        <View style={styles.slide2}>
          <RewardsSwipeView />
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1
  },
  slide2: {
    flex: 1
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeView);
