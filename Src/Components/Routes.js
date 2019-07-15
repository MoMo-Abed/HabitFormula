import React, { Component } from "react";
import { View, Text } from "react-native";
import { Scene, Router, Stack } from "react-native-router-flux";

import AuthMainPage from "./Auth/AuthMainPage";
import EmailAndPasswordLogin from "./Auth/EmailAndPasswordLogin";
import PasswordReset from "./Auth/PasswordReset";
import SignUpPage from "./Auth/SignUpPage";

import MainView from "./MainView/MainView";
import ThemesPageView from "./MainView/ComponentsParts/Theme/ThemesPageView";
import CreateHabitMainView from "./MainView/SecPage/CreateHabitMainView";
import InsiderMainView from "./MainView/HabitInsider/InsiderMainView";
import Wa_Th_MainView from "./WalkThrough/Wa_Th_MainView";
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="auth" hideNavBar>
            <Scene key="authMain" hideNavBar component={AuthMainPage} />
            <Scene
              key="EmailPass"
              hideNavBar
              component={EmailAndPasswordLogin}
            />
            <Scene key="PassReset" hideNavBar component={PasswordReset} />
            <Scene key="SignUp" hideNavBar component={SignUpPage} />
          </Scene>

          <Scene key="Main" initial hideNavBar>
            <Scene component={MainView} key="MainView" />
            <Scene component={ThemesPageView} key="themesView" />
            <Scene component={CreateHabitMainView} key="CreateHabit" />
            <Scene component={InsiderMainView} key="HabitInsider" />
            <Scene component={Wa_Th_MainView} key="WalkThrough" />
          </Scene>
        </Stack>
      </Router>
    );
  }
}
