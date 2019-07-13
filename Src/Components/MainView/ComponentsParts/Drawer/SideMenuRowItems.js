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
  Badge
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Actions } from "react-native-router-flux";
export class SideMenuRowItems extends Component {
  static propTypes = {
    ChangStyle: PropTypes.string.isRequired
  };

  //Toggle Text  Color on Theme Change

  ToggleTextColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "white";
      case "candy":
      case "blue":
      case "pop":
        return "gray";

      default:
        return null;
    }
  }

  //Toggle Badge  Color on Theme Change

  ToggleBadgeColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#238787";
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

  ToggleBadgeText() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "black";
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
      <View>
        <Button onPress={this.props.onPressBtn} transparent>
          <View style={styles.MainView}>
            <AntDesign name="heart" size={20} color="gray" />
            <Text style={[styles.Text, { color: this.ToggleTextColor() }]}>
              Habits
            </Text>

            <Badge
              style={[
                styles.Badge,
                { backgroundColor: this.ToggleBadgeColor(), marginLeft: 80 }
              ]}
            >
              <Text style={{ color: this.ToggleBadgeText() }}>
                {this.props.Habits.length}
              </Text>
            </Badge>
          </View>
        </Button>

        <Button onPress={this.props.onPressBtn} transparent>
          <View style={styles.MainView}>
            <AntDesign name="pluscircle" size={20} color="gray" />
            <Text style={[styles.Text, { color: this.ToggleTextColor() }]}>
              Categories
            </Text>
          </View>
        </Button>

        <Button onPress={() => Actions.themesView()} transparent>
          <View style={styles.MainView}>
            <AntDesign name="layout" size={20} color="gray" />
            <Text style={[styles.Text, { color: this.ToggleTextColor() }]}>
              Themes
            </Text>
          </View>
        </Button>

        <Button onPress={() => Actions.themesView()} transparent>
          <View style={styles.MainView}>
            <AntDesign name="setting" size={20} color="gray" />
            <Text style={[styles.Text, { color: this.ToggleTextColor() }]}>
              Settings
            </Text>
          </View>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 40
  },

  Text: {
    marginLeft: 90,
    fontSize: 15
  },

  Badge: {
    borderRadius: 25,
    height: 20
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle,
  Habits: state.HBHabits.Habits
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenuRowItems);
