import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
  Content
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export class Menu extends Component {
  static propTypes = {
    prop: PropTypes
  };

  ToggleColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "white";
      case "candy":
        return "#F24236";
      case "blue":
        return "white";
      case "pop":
        return "#8852CE";
      default:
        return null;
    }
  }

  ToggleViewColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#1A191B";
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

  render() {
    let { HabitMenuCard } = this.props;
    return (
      <View>
        {HabitMenuCard ? (
          <View
            style={[
              styles.MenuDayView,
              { height: 60, backgroundColor: this.ToggleColor() }
            ]}
          >
            <Button
              transparent
              style={{
                paddingLeft: 20,
                paddingTop: 10,

                paddingRight: 20
              }}
              onPress={this.props.OnDonePress}
            >
              <AntDesign
                color={this.ToggleViewColor()}
                name="checkcircle"
                size={20}
              />
              <Text style={{ color: this.ToggleViewColor(), marginLeft: 5 }}>
                Done
              </Text>
            </Button>

            <Button
              transparent
              style={{
                paddingLeft: 20,
                paddingTop: 10,

                paddingRight: 20
              }}
              onPress={this.props.OnFailPress}
            >
              <AntDesign
                color={this.ToggleViewColor()}
                name="closecircle"
                size={20}
              />
              <Text style={{ color: this.ToggleViewColor(), marginLeft: 5 }}>
                Fail
              </Text>
            </Button>
            <Button
              transparent
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                paddingRight: 20
              }}
              onPress={this.props.OnSkipPress}
            >
              <AntDesign
                color={this.ToggleViewColor()}
                name="minuscircle"
                size={20}
              />
              <Text style={{ color: this.ToggleViewColor(), marginLeft: 5 }}>
                Skip
              </Text>
            </Button>
            <Button
              transparent
              style={{
                paddingLeft: 20,
                paddingTop: 10,

                paddingRight: 20
              }}
              onPress={this.props.OnDeletePress}
            >
              <MaterialCommunityIcons
                color={this.ToggleViewColor()}
                name="delete-circle"
                size={25}
              />
              <Text style={{ color: this.ToggleViewColor(), marginLeft: 5 }}>
                Delete
              </Text>
            </Button>
          </View>
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MenuDayView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle,
  HabitMenuCard: state.HBHabits.HabitMenuCard
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
