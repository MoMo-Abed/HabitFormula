import React, { Component } from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Actions } from "react-native-router-flux";
import { UserSignUp } from "../../Redux/Action/ChampionToDo_Auth";
import Background from "./Background.png";

export class SignUpPage extends Component {
  state = {
    Email: "",
    Password: "",
    Name: ""
  };
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <ImageBackground
        source={Background}
        style={{ height: "100%", width: "100%" }}
      >
        <Header transparent androidStatusBarColor="#2F556C">
          <Left>
            <Button onPress={() => Actions.authMain()} transparent>
              <AntDesign name="left" color="white" size={30} />
            </Button>
          </Left>
          <Body>
            <Title>Sign Up</Title>
          </Body>
          <Right>
            <Button onPress={() => Actions.EmailPass()} transparent>
              <Text style={{ color: "white" }}>Go to Log in</Text>
            </Button>
          </Right>
        </Header>
        <View
          style={{
            alignSelf: "center",
            width: "95%",
            marginTop: 20,
            marginLeft: 5
          }}
        >
          <Form>
            <Item style={{ width: "90%" }} floatingLabel>
              <Label style={{ color: "white" }}>Name</Label>
              <Input
                value={this.state.Name}
                onChangeText={Name => this.setState({ Name })}
                style={{
                  color: "white",
                  fontSize: 15
                }}
              />
            </Item>

            <Item style={{ width: "90%" }} floatingLabel>
              <Label style={{ color: "white" }}>Email</Label>
              <Input
                value={this.state.Email}
                onChangeText={Email => this.setState({ Email })}
                style={{
                  color: "white",
                  fontSize: 15
                }}
              />
            </Item>
            <Item style={{ width: "90%", marginLeft: 15 }} floatingLabel last>
              <AntDesign name="google" color="#2F556C" size={20} />

              <Label style={{ color: "white", marginLeft: -15 }}>
                Password
              </Label>
              <Input
                secureTextEntry
                value={this.state.Password}
                onChangeText={Password => this.setState({ Password })}
                style={{
                  color: "white",
                  fontSize: 15,
                  marginLeft: -15
                }}
              />
            </Item>
          </Form>

          <Button
            onPress={() =>
              this.props.UserSignUp({
                SignUpEmail: this.state.Email,
                SignUpPassword: this.state.Password
              })
            }
            style={{ backgroundColor: "white", width: 370, marginTop: 30 }}
          >
            <Text style={{ color: "black", marginLeft: 160, fontSize: 15 }}>
              Sign up
            </Text>
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { UserSignUp }
)(SignUpPage);
