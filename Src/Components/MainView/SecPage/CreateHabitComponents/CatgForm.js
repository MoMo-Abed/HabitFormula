import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Form,
  Button,
  Container,
  Item,
  Label,
  Input,
  Picker
} from "native-base";

export class CatgForm extends Component {
  state = {
    selected: "fixed"
  };
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Form style={styles.FormView}>
        <View style={styles.ItemStyle} stackedLabel>
          <Label style={styles.LabelSty}>Give this Habit a name</Label>
          <Picker
            style={{ marginBottom: 10, width: "95%", alignSelf: "center" }}
            mode="dropdown"
            headerBackButtonText="Baaack!"
            selectedValue={this.state.selected}
            onValueChange={value => this.setState({ selected: value })}
          >
            <Picker.Item label="Fixed" value="fixed" />
          </Picker>
        </View>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  FormView: {
    backgroundColor: "white",
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    height: 90
  },
  ItemStyle: {
    height: 80,
    width: "95%",
    marginTop: 10
  },
  LabelSty: {
    color: "black",
    fontWeight: "400",
    marginLeft: 15
  }
});
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatgForm);
