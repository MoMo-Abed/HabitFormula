import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Swiper from "react-native-swiper";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Form,
  Item,
  Input,
  Label
} from "native-base";

import {
  ToggleTheme,
  ToggleDrawer
} from "../../../../Redux/Action/MainActions";
import background from "./Pics/background.jpg";
import pop from "./Pics/pop.png";
import dark from "./Pics/dark.png";
import candy from "./Pics/candy.png";
import blue from "./Pics/blue.png";
import { Actions } from "react-native-router-flux";
export class ThemesPageView extends Component {
  static propTypes = {
    prop: PropTypes
  };

  onDarkPress() {
    this.props.ToggleTheme("dark");
    this.props.ToggleDrawer();
    Actions.Main();
  }

  onPopPress() {
    this.props.ToggleTheme("pop");
    this.props.ToggleDrawer();
    Actions.Main();
  }

  onBluePress() {
    this.props.ToggleTheme("blue");
    this.props.ToggleDrawer();
    Actions.Main();
  }

  onCandyPress() {
    this.props.ToggleTheme("candy");
    this.props.ToggleDrawer();
    Actions.Main();
  }

  render() {
    return (
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={background}
      >
        <Swiper showsPagination={false} style={{ height: "100%" }}>
          <View style={styles.slide1}>
            <View style={styles.ThemeNameView}>
              <Text style={styles.ThemeNameText}>Dark</Text>
            </View>
            <Image source={dark} style={styles.ThemeImage} />
            <Button onPress={() => this.onDarkPress()} style={styles.BtnStyle}>
              <Text style={styles.BtnStyleText}>Set Theme</Text>
            </Button>
          </View>

          <View style={styles.slide1}>
            <View style={styles.ThemeNameView}>
              <Text style={styles.ThemeNameText}>Pop</Text>
            </View>
            <Image source={pop} style={styles.ThemeImage} />
            <Button onPress={() => this.onPopPress()} style={styles.BtnStyle}>
              <Text style={styles.BtnStyleText}>Set Theme</Text>
            </Button>
          </View>

          <View style={styles.slide1}>
            <View style={styles.ThemeNameView}>
              <Text style={styles.ThemeNameText}>Blue</Text>
            </View>
            <Image source={blue} style={styles.ThemeImage} />
            <Button onPress={() => this.onBluePress()} style={styles.BtnStyle}>
              <Text style={styles.BtnStyleText}>Set Theme</Text>
            </Button>
          </View>

          <View style={styles.slide1}>
            <View style={styles.ThemeNameView}>
              <Text style={styles.ThemeNameText}>Candy</Text>
            </View>
            <Image source={candy} style={styles.ThemeImage} />
            <Button onPress={() => this.onCandyPress()} style={styles.BtnStyle}>
              <Text style={styles.BtnStyleText}>Set Theme</Text>
            </Button>
          </View>
        </Swiper>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    alignSelf: "center"
  },

  ThemeNameView: {
    alignSelf: "center",
    backgroundColor: "#F24236",
    borderRadius: 5,
    height: 30,
    width: 80,
    marginTop: 20
  },

  ThemeNameText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginTop: 5
  },

  ThemeImage: {
    width: 400,
    height: 560,
    marginTop: 0
  },

  BtnStyle: {
    alignSelf: "center",
    width: 100,
    backgroundColor: "#F24236",
    marginTop: -15
  },

  BtnStyleText: {
    textAlign: "center",
    marginLeft: 15,
    color: "white",
    fontWeight: "bold"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { ToggleTheme, ToggleDrawer }
)(ThemesPageView);
