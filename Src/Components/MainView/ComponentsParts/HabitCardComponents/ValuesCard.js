import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ToggleInfoCard } from "../../../../Redux/Action/HB_Habits_Actions";
export class ValuesCard extends Component {
  static propTypes = {
    prop: PropTypes
  };

  //Toggle Container  Color on Theme Change

  ToggleColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "white";
      case "candy":
      case "blue":
        return "white";

      case "pop":
        return "white";

      default:
        return null;
    }
  }

  render() {
    let { HabitInfoCard } = this.props;
    return (
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <AntDesign
            name="clockcircleo"
            style={{ marginTop: 3 }}
            color={this.ToggleColor()}
            size={12}
          />
          <Text style={{ color: this.ToggleColor() }}>
            {this.props.DaysHabitOn}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <AntDesign
            name="copyright"
            style={{ marginTop: 3 }}
            color={this.ToggleColor()}
            size={12}
          />
          <Text style={{ color: this.ToggleColor() }}>
            {this.props.CalHabitNum}
          </Text>
        </View>
        <View style={{ marginLeft: 280 }}>
          <AntDesign
            onPress={() => this.props.ToggleInfoCard()}
            name={HabitInfoCard ? "caretup" : "caretdown"}
            color={this.ToggleColor()}
            size={12}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  HabitInfoCard: state.HBHabits.HabitInfoCard,
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { ToggleInfoCard }
)(ValuesCard);
