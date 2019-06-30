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
  Title
} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import { MenuProvider } from "react-native-popup-menu";
import SideMenu from "react-native-side-menu";

import HeaderMainView from "./ComponentsParts/HeaderMainView";
import SwipeView from "./ComponentsParts/SwipeView";
import FabBtnView from "./ComponentsParts/FabBtnView";
import SideMenuView from "./ComponentsParts/SideMenuView";
import { Drawer } from "native-base";
export class MainView extends Component {
  render() {
    let { DrawerState } = this.props;
    return (
      <MenuProvider>
        <Drawer open={DrawerState} content={<SideMenuView />}>
          <Container>
            <HeaderMainView />
            <SwipeView />
            <FabBtnView />
          </Container>
        </Drawer>
      </MenuProvider>
    );
  }
}

const mapStateToProps = state => ({
  DrawerState: state.HBMain.DrawerState
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);
