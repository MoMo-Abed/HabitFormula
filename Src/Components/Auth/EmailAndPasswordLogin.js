import React, { Component } from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
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
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Actions } from "react-native-router-flux";
import { UserLogin } from "../../Redux/Action/ChampionToDo_Auth";
import Background from "./Background.png";

export class EmailAndPasswordLogin extends Component {
  state = {
    Email: "",
    Password: ""
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
            <Title>Log In</Title>
          </Body>
          <Right>
            <Button onPress={() => Actions.SignUp()} transparent>
              <Text style={{ color: "white" }}>Go to sign up</Text>
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
              this.props.UserLogin({
                loginemail: this.state.Email,
                loginpassword: this.state.Password
              })
            }
            style={{ backgroundColor: "white", width: 370, marginTop: 30 }}
          >
            <Text style={{ color: "black", marginLeft: 160, fontSize: 15 }}>
              Log In
            </Text>
          </Button>

          <Button
            style={{ marginTop: 15, marginLeft: 100 }}
            transparent
            onPress={() => Actions.PassReset()}
          >
            <Text style={{ fontSize: 16, color: "white" }}>
              Forgot your Password?
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
  { UserLogin }
)(EmailAndPasswordLogin);
