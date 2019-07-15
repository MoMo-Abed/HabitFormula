import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Icon, Fab } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ToggleRewardsView } from "../../../../Redux/Action/MainActions";
import { Actions } from "react-native-router-flux";
import { ShowInsiderOverLay } from "../../../../Redux/Action/HB_Habits_Actions";
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
        return "#238787";
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
        onPress={() => {
          this.setState({ active: !this.state.active });
          this.props.ShowInsiderOverLay();
        }}
      >
        <AntDesign name={active ? "close" : "plus"} />
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
  { ShowInsiderOverLay }
)(FabBtnView);
