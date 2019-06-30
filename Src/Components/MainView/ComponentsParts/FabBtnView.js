import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Icon, Fab } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";

export class FabBtnView extends Component {
  state = {
    active: false
  };

  static propTypes = {
    ChangStyle: PropTypes.string.isRequired
  };

  //Toggle  Fab Btn Color in Theme Change

  ToggleFabBtnColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#0A090C";
      case "candy":
        return "#F24236";
      case "blue":
        return "#117ACA";
      case "pop":
        return "#8852CE";
    }
  }

  render() {
    let { active } = this.state;
    return (
      <Fab
        active={this.state.active}
        direction="up"
        style={{ backgroundColor: this.ToggleFabBtnColor() }}
        position="bottomRight"
        onPress={() => this.setState({ active: !this.state.active })}
      >
        <AntDesign name={active ? "close" : "plus"} />
        <Button style={{ backgroundColor: this.ToggleFabBtnColor() }}>
          <Text style={[styles.BtnText, { opacity: active ? 1 : 0 }]}>
            Add Habit
          </Text>
          <AntDesign
            style={{ position: "absolute" }}
            name="plus"
            color="white"
            size={20}
          />
        </Button>
        <Button style={{ backgroundColor: this.ToggleFabBtnColor() }}>
          <Text style={[styles.BtnText, { opacity: active ? 1 : 0 }]}>
            Add Reward
          </Text>
          <AntDesign
            style={{ position: "absolute" }}
            color="white"
            size={20}
            name="plus"
          />
        </Button>
      </Fab>
    );
  }
}

const styles = StyleSheet.create({
  BtnText: {
    backgroundColor: "black",
    color: "white",
    width: 80,
    height: 25,
    textAlign: "center",
    marginRight: 140
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FabBtnView);
