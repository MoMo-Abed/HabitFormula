import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const weekDaysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class CalendarDayComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onDayPress = this.onDayPress.bind(this);
  }

  ToggleColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
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

  getContentStyle() {
    const { state, marking = {} } = this.props;
    const style = {
      content: {},
      text: {
        color: this.ToggleColor()
      }
    };

    //console.log(marking);
    if (state === "disabled") {
      style.text.color = "gray";
      style.content.borderColor = "white";

      style.content.backgroundColor = "white";
      style.content.borderRadius = 50;
      style.content.borderWidth = 1;
    } else {
      if (marking.partiallyBlocked) {
        style.content.borderColor = "#c1c2c1";
        style.content.borderRadius = 50;
        style.content.borderWidth = 1;
      } else if (marking.partiallySoldOut) {
        style.content.borderColor = "#e35052";
        style.content.borderRadius = 50;
        style.content.borderWidth = 1;
      }

      if (marking.selected) {
        style.text.color = this.props.textColor;
        style.content.backgroundColor = "#216bc9";
        style.content.borderRadius = 50;
      } else if (marking.fullyBlocked) {
        style.text.color = "#fff";
        style.content.backgroundColor = "red";
        style.content.borderRadius = 50;
      } else if (marking.fullySoldOut) {
        style.text.color = "#fff";
        style.content.backgroundColor = "#e35052";
        style.content.borderRadius = 50;
      } else if (marking.Done) {
        style.text.color = "white";
        style.content.backgroundColor = "#64A05A";
        style.content.borderRadius = 50;
      } else if (marking.Fail) {
        style.text.color = "white";
        style.content.backgroundColor = "#A03636";
        style.content.borderRadius = 50;
      } else if (marking.Skip) {
        style.text.color = "white";
        style.content.backgroundColor = "#6472C1";
        style.content.borderRadius = 50;
      }
    }

    return style;
  }

  onDayPress() {
    this.props.onPress(this.props.date);
  }

  render() {
    const contentStyle = this.getContentStyle();

    return (
      <View style={[styles.container]}>
        <TouchableOpacity
          style={[styles.content, contentStyle.content]}
          onPress={this.onDayPress}
        >
          <Text style={[styles.contentText, contentStyle.text]}>
            {String(this.props.children)}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

CalendarDayComponent.propTypes = {
  children: PropTypes.any,
  state: PropTypes.string,
  marking: PropTypes.any,
  horizontal: PropTypes.bool,
  date: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  current: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 7,
    marginRight: 7
  },
  weekName: {
    width: 32,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold"
  },
  content: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center"
  },
  contentText: {
    fontSize: 20
  },
  footer: {
    flexDirection: "row"
  },
  smallIcon: {
    width: 12,
    height: 12,
    position: "absolute",
    top: -1,
    right: -1
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarDayComponent);
