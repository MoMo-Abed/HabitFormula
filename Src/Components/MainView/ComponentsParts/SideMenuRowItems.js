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
export class SideMenuRowItems extends Component {
  static propTypes = {
    ChangStyle: PropTypes.string.isRequired
  };

  //Toggle Text  Color on Theme Change

  ToggleTextColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
      case "blue":
      case "pop":
        return "white";
      case "candy":
        return "gray";

      default:
        return null;
    }
  }

  //Toggle Badge  Color on Theme Change
  /*
  ToggleBadgeColor() {
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
*/
  render() {
    return (
      <Button onPress={this.props.onPressBtn} transparent>
        <View style={styles.MainView}>
          <AntDesign name={this.props.IconName} size={20} color="gray" />
          <Text style={[styles.Text, { color: this.ToggleTextColor() }]}>
            {this.props.Title}
          </Text>

          {/** 
          <Badge
            style={[styles.Badge, { backgroundColor: this.ToggleBadgeColor() }]}
          >
            <Text style={styles.BadgeText}>{this.props.CircleNumber}</Text>
          </Badge>
          */}
        </View>
      </Button>
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
    marginLeft: 100,
    borderRadius: 25,
    height: 20
  },

  BadgeText: {
    color: "white"
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenuRowItems);
