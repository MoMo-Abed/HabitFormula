import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

import SideMenuRowItems from "./SideMenuRowItems";

export class SideMenuView extends Component {
  static propTypes = {
    ChangStyle: PropTypes.string.isRequired
  };

  //Toggle Qoates Color in Theme Change

  ToggleQoatesColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#363538";
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

  //Toggle Drawer View Color in Theme Change

  ToggleVeiwColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#363538";
      case "candy":
        return "white";
      case "blue":
        return "white";
      case "pop":
        return "white";
      default:
        return null;
    }
  }

  render() {
    return (
      <View
        style={[styles.MainView, { backgroundColor: this.ToggleVeiwColor() }]}
      >
        <View
          style={[
            styles.QautesView,
            { backgroundColor: this.ToggleQoatesColor() }
          ]}
        >
          <Text style={styles.QautesText}>
            “The truth is that everyone is bored, and devotes himself to
            cultivating habits.”{" "}
          </Text>
        </View>

        <SideMenuRowItems />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    height: "100%"
  },

  QautesView: {
    height: "25%"
  },

  QautesText: {
    color: "white",
    textAlign: "center",
    marginTop: 50
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenuView);
