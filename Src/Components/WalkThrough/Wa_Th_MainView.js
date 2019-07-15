import React, { Component } from "react";
import { StyleSheet, View, Text, Image, I18nManager } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppIntroSlider from "react-native-app-intro-slider";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";

import Chain from "./Pics/Chain.png";
import reminder from "./Pics//reminder.png";
import Logo from "../Auth/Logo.png";
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  image: {
    width: 150,
    height: 200,
    alignSelf: "center",
    marginBottom: 50
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingHorizontal: 16
  },
  title: {
    fontSize: 22,
    color: "white",
    backgroundColor: "transparent",
    textAlign: "center",
    marginBottom: 16
  },
  Icon: {
    alignSelf: "center",
    marginBottom: 20
  }
});

const slides = [
  {
    key: "somethun",
    title: "welcome to Habit Formula",
    image: Logo,
    text:
      "Join thousands of people who use Habit Formula daily to builda better life."
  },
  {
    key: "somethun1",
    title: "Build chains, build habits",
    icon: "chain",
    text:
      "Every time you do a habit your chain grows longer.Eventually you will build a very long chain.Your only job then, is to keep growing the chain as long as possible"
  },
  {
    key: "somethun2",
    title: "Reminders",
    icon: "bell",

    text: "Set reminders to stay on tracj and never again forget to mark a day."
  },
  {
    key: "somethun3",
    title: "Analyze your data",
    icon: "line-chart",

    text:
      "Get an overview of how well you have been performing your habits and identify your patterns."
  }
];

export class Wa_Th_MainView extends Component {
  static propTypes = {
    prop: PropTypes
  };

  _renderItem = ({ item, dimensions }) => (
    <LinearGradient
      style={[
        styles.mainContent,
        {
          flex: 1
        }
      ]}
      colors={["#282729", "#F24236"]}
    >
      <View>
        {item.image ? (
          <Image source={item.image} style={styles.image} />
        ) : (
          <FontAwesome
            color="white"
            style={styles.Icon}
            name={item.icon}
            size={150}
          />
        )}

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </LinearGradient>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        showPrevButton
        showSkipButton
        onDone={() => Actions.auth()}
        onSkip={() => Actions.auth()}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wa_Th_MainView);
