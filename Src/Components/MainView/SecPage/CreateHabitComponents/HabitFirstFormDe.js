import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Button, Container, Item, Label, Input } from "native-base";
export class HabitFirstFormDe extends Component {
  static propTypes = {
    prop: PropTypes
  };

  ToggleFormMainColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#1A191B";
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

  ToggleTextColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
      case "candy":
      case "blue":
      case "pop":
        return "white";
      default:
        return null;
    }
  }

  render() {
    return (
      <Form
        style={[
          styles.FormView,
          { backgroundColor: this.ToggleFormMainColor() }
        ]}
      >
        <Item style={styles.ItemStyle} stackedLabel>
          <Label style={[styles.LabelSty, { color: this.ToggleTextColor() }]}>
            Give this Habit a name
          </Label>
          <Input
            placeholderTextColor={this.ToggleTextColor()}
            onChangeText={this.props.OnHabitNameChange}
            value={this.props.HabitNameValue}
            style={{ marginTop: 10, color: this.ToggleTextColor() }}
            placeholder="Habit"
          />
        </Item>

        <Item style={[styles.ItemStyle, { marginTop: 10 }]} stackedLabel>
          <Label style={[styles.LabelSty, { color: this.ToggleTextColor() }]}>
            Give ita description (optional)
          </Label>
          <Input
            placeholderTextColor={this.ToggleTextColor()}
            onChangeText={this.props.OnHabitDescChange}
            value={this.props.HabitDescValue}
            style={{ marginTop: 10, color: this.ToggleTextColor() }}
            placeholder="Description"
          />
        </Item>

        <Item style={styles.ItemReSty} stackedLabel>
          <Label style={[styles.LabelSty, { color: this.ToggleTextColor() }]}>
            Reason
          </Label>
          <Item>
            <Input
              placeholderTextColor={this.ToggleTextColor()}
              onChangeText={this.props.OnHabitRes1Change}
              value={this.props.HabitRes1Value}
              style={[styles.InputResSty, { color: this.ToggleTextColor() }]}
              placeholder="Reason"
            />
          </Item>
          <Item>
            <Input
              placeholderTextColor={this.ToggleTextColor()}
              onChangeText={this.props.OnHabitRes2Change}
              value={this.props.HabitRes2Value}
              style={[styles.InputResSty, { color: this.ToggleTextColor() }]}
              placeholder="Reason"
            />
          </Item>
          <Input
            placeholderTextColor={this.ToggleTextColor()}
            onChangeText={this.props.OnHabitRes3Change}
            value={this.props.HabitRe3Value}
            style={[styles.InputResSty, { color: this.ToggleTextColor() }]}
            placeholder="Reason"
          />
        </Item>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  FormView: {
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    height: 450
  },
  ItemStyle: {
    height: 80,
    width: "95%"
  },
  LabelSty: {
    fontWeight: "400"
  },
  ItemReSty: {
    width: "95%",
    marginTop: 10,
    height: 230
  },
  InputResSty: {
    marginTop: 10,
    width: "100%"
  }
});

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitFirstFormDe);
