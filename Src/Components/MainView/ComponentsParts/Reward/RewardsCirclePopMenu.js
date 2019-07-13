import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import Entypo from "react-native-vector-icons/Entypo";
export class RewardsCirclePopMenu extends Component {
  static propTypes = {
    prop: PropTypes
  };

  ToggleIconColor() {
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

  render() {
    return (
      <Menu>
        <MenuTrigger>
          <Entypo
            name="dots-three-vertical"
            size={20}
            color={this.ToggleIconColor()}
          />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => alert(`Help`)} text="Delete" />
          <MenuOption onSelect={() => alert(`Restore`)} text="Edit" />
        </MenuOptions>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardsCirclePopMenu);
