import React, { Component } from "react";
import { View, Text } from "react-native";
import { Scene, Router, Stack } from "react-native-router-flux";

import MainView from "./MainView/MainView";
import ThemesPageView from "./MainView/ComponentsParts/Theme/ThemesPageView";
import CreateHabitMainView from "./MainView/SecPage/CreateHabitMainView";
import InsiderMainView from "./MainView/HabitInsider/InsiderMainView";
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="Main" initial hideNavBar>
            <Scene component={MainView} key="MainView" />
            <Scene component={ThemesPageView} key="themesView" />
            <Scene component={CreateHabitMainView} key="CreateHabit" />
            <Scene component={InsiderMainView} key="HabitInsider" />
          </Scene>
        </Stack>
      </Router>
    );
  }
}
