import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
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

import { CreateReward } from "../../../../Redux/Action/HB_Rewards_Actions";
import { ToggleRewardsView } from "../../../../Redux/Action/MainActions";

export class OverlayRewardsMenu extends Component {
  state = {
    CreateRewards: {
      RewardTitle: "",
      RewardDesc: "",
      RewardPoints: ""
    }
  };

  static propTypes = {
    prop: PropTypes
  };

  ToggleFormBGColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#363538";
      case "candy":
        return "#F24236";
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
        return "white";
      case "blue":
        return "white";
      case "pop":
        return "white";
      default:
        return null;
    }
  }

  FunValidSubmit() {
    let { RewardTitle } = this.state.CreateRewards;
    if (RewardTitle == "") {
      return null;
    } else {
      this.props.CreateReward(this.state.CreateRewards);
    }
  }

  render() {
    const { RewardCreateView } = this.props;
    return (
      <View style={[styles.MainView]}>
        {RewardCreateView ? (
          <View style={{ height: "100%" }}>
            <TouchableWithoutFeedback
              onPress={() => this.props.ToggleRewardsView()}
            >
              <View style={[styles.overlay]} />
            </TouchableWithoutFeedback>

            <Form
              style={[
                styles.FormView,
                { backgroundColor: this.ToggleFormBGColor() }
              ]}
            >
              <Text style={[styles.AddReText, { color: this.ToggleColor() }]}>
                Add Reward
              </Text>
              <Item
                style={{
                  marginTop: 10,
                  width: "85%",
                  borderBottomColor: this.ToggleColor()
                }}
              >
                <Input
                  value={this.state.CreateRewards.RewardTitle}
                  onChangeText={title =>
                    this.setState({
                      CreateRewards: {
                        ...this.state.CreateRewards,
                        RewardTitle: title
                      }
                    })
                  }
                  style={{ color: this.ToggleColor() }}
                  selectionColor={this.ToggleColor()}
                  placeholderTextColor={this.ToggleColor()}
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
                  value={this.state.CreateRewards.RewardDesc}
                  onChangeText={Desc =>
                    this.setState({
                      CreateRewards: {
                        ...this.state.CreateRewards,
                        RewardDesc: Desc
                      }
                    })
                  }
                  style={{ color: this.ToggleColor() }}
                  selectionColor={this.ToggleColor()}
                  placeholderTextColor={this.ToggleColor()}
                  placeholder="Description"
                />
              </Item>
              <View style={styles.ReqPointsView}>
                <Label style={{ marginTop: 15, color: this.ToggleColor() }}>
                  Required Points:
                </Label>
                <Item
                  style={{ width: 50, borderBottomColor: this.ToggleColor() }}
                >
                  <Input
                    value={this.state.CreateRewards.RewardPoints}
                    onChangeText={Points =>
                      this.setState({
                        CreateRewards: {
                          ...this.state.CreateRewards,
                          RewardPoints: Points
                        }
                      })
                    }
                    style={{ color: this.ToggleColor() }}
                    selectionColor={this.ToggleColor()}
                    placeholderTextColor={this.ToggleColor()}
                    keyboardType="number-pad"
                    placeholder="Points"
                  />
                </Item>
              </View>

              <View style={styles.BtnView}>
                <Button
                  transparent
                  onPress={() => this.props.ToggleRewardsView()}
                >
                  <Text style={{ color: this.ToggleColor() }}>Cancel</Text>
                </Button>
                <Button
                  onPress={() => {
                    this.FunValidSubmit(), this.props.ToggleRewardsView();
                  }}
                  style={{ marginLeft: 30 }}
                  transparent
                >
                  <Text style={{ color: this.ToggleColor() }}>Ok</Text>
                </Button>
              </View>
            </Form>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    height: "100%",
    position: "absolute",
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
    marginTop: 150,
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
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { CreateReward, ToggleRewardsView }
)(OverlayRewardsMenu);
