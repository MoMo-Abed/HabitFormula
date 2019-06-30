import React, { Component } from "react";
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

export class HeaderRightPopMenu extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Menu>
        <MenuTrigger>
          <Entypo name="dots-three-vertical" size={25} color="white" />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => alert(`Help`)} text="Help" />
          <MenuOption onSelect={() => alert(`Restore`)} text="Restore" />
          <MenuOption onSelect={() => alert(`Settings`)} text="Settings" />
          <MenuOption
            onSelect={() => alert(`Walkthrough`)}
            text="Walkthrough"
          />
          <MenuOption onSelect={() => alert(`About`)} text="About" />
          <MenuOption onSelect={() => alert(`Contact Us`)} text="Contact Us" />
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
)(HeaderRightPopMenu);
