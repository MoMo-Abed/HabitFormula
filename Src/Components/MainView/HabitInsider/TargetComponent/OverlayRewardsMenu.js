import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Overlay from "react-native-modal-overlay";
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

import { ToggleRewardsView } from "../../../../Redux/Action/MainActions";
import {
  CreateTarget,
  ShowInsiderOverLay
} from "../../../../Redux/Action/HB_Habits_Actions";
export class OverlayRewardsMenu extends Component {
  state = {
    CreateTarget: {
      TargetTitle: "",
      TargetDesc: "",
      TargetDays: ""
    }
  };

  static propTypes = {
    prop: PropTypes
  };

  ToggleFormBGColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#0A090C";
      case "candy":
        return "white";
      case "blue":
        return "#117ACA";
      case "pop":
        return "#8852CE";
      default:
        return null;
    }
  }

  ToggleColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "white";
      case "candy":
        return "#F24236";
      case "blue":
        return "black";
      case "pop":
        return "#8852CE";
      default:
        return null;
    }
  }

  FunValidSubmit() {
    let { TargetTitle } = this.state.CreateTarget;
    if (TargetTitle == "") {
      return null;
    } else {
      this.props.CreateTarget(this.state.CreateTarget);
      this.setState({
        CreateTarget: {
          TargetTitle: "",
          TargetDesc: "",
          TargetDays: ""
        }
      });
    }
  }

  RenderItem() {
    let { ShowHabitInsiderOverLayRe } = this.props;
    if (ShowHabitInsiderOverLayRe) {
      return (
        <View style={[styles.MainView]}>
          <View style={[styles.overlay, { height: "100%" }]} />
          {console.log("work")}
          <Form
            style={[
              styles.FormView,
              { backgroundColor: this.ToggleFormBGColor() }
            ]}
          >
            <Text style={[styles.AddReText, { color: this.ToggleColor() }]}>
              Add Target
            </Text>

            <View style={styles.ReqPointsView}>
              <Label style={{ marginTop: 15 }}>Target Days:</Label>
              <Item
                style={{ width: 50, borderBottomColor: this.ToggleColor() }}
              >
                <Input
                  value={this.state.CreateTarget.TargetDays}
                  onChangeText={days =>
                    this.setState({
                      CreateTarget: {
                        ...this.state.CreateTarget,
                        TargetDays: days
                      }
                    })
                  }
                  selectionColor="red"
                  keyboardType="number-pad"
                  placeholder="Days"
                />
              </Item>
            </View>

            <Item
              style={{
                marginTop: 10,
                width: "85%",
                borderBottomColor: this.ToggleColor()
              }}
            >
              <Input
                value={this.state.CreateTarget.TargetTitle}
                onChangeText={title =>
                  this.setState({
                    CreateTarget: {
                      ...this.state.CreateTarget,
                      TargetTitle: title
                    }
                  })
                }
                selectionColor="red"
                placeholder="Reward"
              />
            </Item>
            <Item
              style={{
                marginTop: 10,
                width: "85%",
                borderBottomColor: this.ToggleColor()
              }}
            >
              <Input
                value={this.state.CreateTarget.TargetDesc}
                onChangeText={Desc =>
                  this.setState({
                    CreateTarget: {
                      ...this.state.CreateTarget,
                      TargetDesc: Desc
                    }
                  })
                }
                style={{}}
                selectionColor="red"
                placeholder="Description"
              />
            </Item>

            <View style={styles.BtnView}>
              <Button
                transparent
                onPress={() => this.props.ShowInsiderOverLay()}
              >
                <Text style={{ color: this.ToggleColor() }}>Cancel</Text>
              </Button>
              <Button
                onPress={() => {
                  this.FunValidSubmit(), this.props.ShowInsiderOverLay();
                }}
                style={{ marginLeft: 30 }}
                transparent
              >
                <Text style={{ color: this.ToggleColor() }}>Ok</Text>
              </Button>
            </View>
          </Form>
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={{ height: "100%", width: "100%", position: "absolute" }}>
        {this.RenderItem()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    height: "100%",
    alignSelf: "center",
    width: "100%"
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: "black",
    width: "100%",
    height: "100%"
  },
  FormView: {
    height: 350,
    marginTop: 100,
    width: "90%",
    alignSelf: "center"
  },
  AddReText: {
    fontWeight: "400",
    fontSize: 18,
    color: "black",
    textAlign: "center",
    marginTop: 10
  },
  ReqPointsView: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: "row"
  },
  BtnView: {
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 250
  }
});

const mapStateToProps = state => ({
  RewardCreateView: state.HBMain.RewardCreateView,
  ChangeStyle: state.HBMain.ChangeStyle,
  ShowHabitInsiderOverLayRe: state.HBHabits.ShowHabitInsiderOverLayRe
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { CreateTarget, ShowInsiderOverLay, ToggleRewardsView }
)(OverlayRewardsMenu);
