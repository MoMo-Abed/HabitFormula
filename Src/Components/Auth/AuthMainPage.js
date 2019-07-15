import React, { Component } from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Actions } from "react-native-router-flux";
import Background from "./Background.png";
import Logo from "./Logo.png";
import * as Animatable from "react-native-animatable";

export class AuthMainPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <ImageBackground
        source={Background}
        style={{ height: "100%", width: "100%" }}
      >
        <Animatable.Image
          source={Logo}
          style={styles.AnimLogo}
          animation="fadeIn"
          iterationCount={1}
          direction="alternate"
        />

        <Animatable.View
          animation="fadeIn"
          iterationCount={1}
          direction="alternate"
          style={styles.MainView}
        >
          <View>
            <Text style={styles.HeaderText}>Welcome To Habit Formula</Text>
            <Text style={styles.PText}>
              Create an account to save your tasks and access them anywhere.Its
              free. Forever.
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Button style={styles.BtnGoo} onPress={() => console.log("hi")}>
              <AntDesign name="google" color="#282729" size={20} />
              <Text style={styles.BtnGooText}>Continue with Google</Text>
            </Button>

            <Button style={styles.BtnFac}>
              <AntDesign
                name="facebook-square"
                color="#282729"
                size={20}
                style={{ marginLeft: 7 }}
              />
              <Text style={styles.BtnFacText}>Continue with Facebook</Text>
            </Button>

            <Button style={styles.BtnEmail} onPress={() => Actions.EmailPass()}>
              <MaterialCommunityIcons
                name="email"
                color="#282729"
                size={20}
                style={{ marginRight: 7 }}
              />
              <Text style={styles.BtnEmailText}>Continue with Email</Text>
            </Button>
          </View>
        </Animatable.View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  AnimLogo: {
    width: 150,
    height: 200,
    alignSelf: "center",
    marginTop: 90
  },
  MainView: {
    marginTop: 70,
    marginLeft: 10
  },
  HeaderText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  PText: {
    color: "white",
    fontSize: 15
  },

  BtnGoo: {
    backgroundColor: "white",
    width: "85%",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "space-around"
  },
  BtnGooText: {
    color: "#282729",
    fontSize: 15,
    fontWeight: "300",
    marginRight: 60
  },

  BtnFac: {
    backgroundColor: "white",
    width: "85%",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "space-around",
    marginTop: 20
  },
  BtnFacText: {
    color: "#282729",
    fontSize: 15,
    fontWeight: "300",
    marginRight: 60
  },
  BtnEmail: {
    backgroundColor: "white",
    width: "85%",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "space-around",
    marginTop: 20
  },
  BtnEmailText: {
    color: "#282729",
    fontSize: 15,
    fontWeight: "300",
    marginRight: 60
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthMainPage);
