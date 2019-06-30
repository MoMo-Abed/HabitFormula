import React, { Component } from "react";
import { View, Text } from "react-native";
import { Scene, Router, Stack } from "react-native-router-flux";

import MainView from "./MainView/MainView";
import ThemesPageView from "./MainView/ComponentsParts/ThemesPageView";
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="Main" initial hideNavBar>
            <Scene component={MainView} key="MainView" />
            <Scene component={ThemesPageView} key="themesView" />
          </Scene>
        </Stack>
      </Router>
    );
  }
}
