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
export class HabitRightPopMenu extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Menu>
        <MenuTrigger>
          <Entypo
            name="dots-three-vertical"
            size={20}
            color={this.props.IconColor}
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitRightPopMenu);
