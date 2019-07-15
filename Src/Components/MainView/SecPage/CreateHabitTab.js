import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Tab,
  Tabs,
  Container,
  Content
} from "native-base";
import HabitFirstFormDe from "./CreateHabitComponents/HabitFirstFormDe";
import StartDateForm from "./CreateHabitComponents/StartDateForm";
import ArchivedForm from "./CreateHabitComponents/ArchivedForm";
import ScheduleForm from "./CreateHabitComponents/ScheduleForm";
import {
  ChangeColor,
  CreateHabit,
  UpdateHabits
} from "../../../Redux/Action/HB_Habits_Actions";
import CreateReminderTab from "./CreateReminderTab";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Actions } from "react-native-router-flux";
export class CreateHabitTab extends Component {
  componentDidMount() {
    if (this.props.UpdateRe) {
      this.setState({
        CreateHabitData: this.props.Habits[this.props.HabitInsider]
      });
    }
  }
  state = {
    CreateHabitData: {
      HabitName: "",
      HabitDesc: "",
      Reason: {
        Res1: "",
        Res2: "",
        Res3: ""
      },

      Reg: null,
      Schedule: {
        FixedDaysOffWeek: {
          DaysOff: {
            Su: false,
            Mo: false,
            Tu: false,
            We: false,
            Th: false,
            Fr: false,
            Sa: false
          }
        },

        FlexibleData: {
          HabitNum: null,
          HMValue: "week"
        },

        RepeatingData: {
          HbNum: null
        },

        HMT: {
          Text: null,
          TimeValue: "times"
        }
      },

      StartDate: new Date(),
      Archived: false,

      HabitNumberOn: 0
    }
  };
  static propTypes = {
    prop: PropTypes
  };

  ToggleStatusColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#0A090C";
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

  //Toggle Header Color in Theme Change

  ToggleHeaderColor() {
    let toggle = this.props.ChangeStyle;

    switch (toggle) {
      case "dark":
        return "#0A090C";
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
        return "#363538";
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

  HabitName(text) {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        HabitName: text
      }
    });
  }

  HabitDescChange(Desc) {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        HabitDesc: Desc
      }
    });
  }

  HabitRes1Change(res1) {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        Reason: { ...this.state.CreateHabitData.Reason, Res1: res1 },
        Reg: [{ res1: res1 }]
      }
    });
  }

  HabitRes2Change(res2) {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        Reason: { ...this.state.CreateHabitData.Reason, Res2: res2 }
      }
    });
  }

  HabitRes3Change(res3) {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        Reason: { ...this.state.CreateHabitData.Reason, Res3: res3 }
      }
    });
  }

  StartDate(newDate) {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        StartDate: newDate
      }
    });
  }

  DaysOffSun() {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        Schedule: {
          ...this.state.CreateHabitData.Schedule,
          FixedDaysOffWeek: {
            ...this.state.CreateHabitData.Schedule.FixedDaysOffWeek,
            DaysOff: {
              ...this.state.CreateHabitData.Schedule.FixedDaysOffWeek.DaysOff,
              Su: !this.state.CreateHabitData.Schedule.FixedDaysOffWeek.DaysOff
                .Su
            }
          }
        }
      }
    });

    this.props.ChangeColor();
  }

  FlexibleHabitNumber(num) {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        Schedule: {
          ...this.state.CreateHabitData.Schedule,
          FlexibleData: {
            ...this.state.CreateHabitData.Schedule.FlexibleData,
            HabitNum: num
          }
        }
      }
    });
  }

  FlexibleValueMenu(value) {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        Schedule: {
          ...this.state.CreateHabitData.Schedule,
          FlexibleData: {
            ...this.state.CreateHabitData.Schedule.FlexibleData,
            HMValue: value
          }
        }
      }
    });
  }

  RepeatingText(value) {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        Schedule: {
          ...this.state.CreateHabitData.Schedule,
          RepeatingData: {
            ...this.state.CreateHabitData.Schedule.RepeatingData,
            HbNum: value
          }
        }
      }
    });
  }

  HTWChangText(text) {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        Schedule: {
          ...this.state.CreateHabitData.Schedule,
          HMT: {
            ...this.state.CreateHabitData.Schedule.HMT,
            Text: text
          }
        }
      }
    });
  }

  HMTPickerChange(value) {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        Schedule: {
          ...this.state.CreateHabitData.Schedule,
          HMT: {
            ...this.state.CreateHabitData.Schedule.HMT,
            TimeValue: value
          }
        }
      }
    });
  }

  SwitchChange() {
    this.setState({
      CreateHabitData: {
        ...this.state.CreateHabitData,
        Archived: !this.state.CreateHabitData.Archived
      }
    });
  }

  CreateHabit() {
    if (this.props.UpdateRe) {
      let HabitsCopy = JSON.parse(JSON.stringify(this.props.Habits));
      //make changes to ingredients
      HabitsCopy[this.props.HabitInsider] = { ...this.state.CreateHabitData }; //whatever new inegredints are

      this.setState({
        Habits: HabitsCopy
      });
      this.props.UpdateHabits(HabitsCopy);
    } else {
      this.props.CreateHabit(this.state.CreateHabitData);
    }
    Actions.MainView();
    this.setState({
      CreateHabitData: {
        HabitName: "",
        HabitDesc: "",
        Reason: {
          Res1: "",
          Res2: "",
          Res3: ""
        },
        Schedule: {
          FixedDaysOffWeek: {
            DaysOff: {
              Su: false,
              Mo: false,
              Tu: false,
              We: false,
              Th: false,
              Fr: false,
              Sa: false
            }
          },

          FlexibleData: {
            HabitNum: null,
            HMValue: "week"
          },

          RepeatingData: {
            HbNum: null
          },

          HMT: {
            Text: null,
            TimeValue: "times"
          },
          MarkedDateState: null
        },

        StartDate: new Date(),
        Archived: false
      }
    });
  }

  render() {
    return (
      <Container style={{ backgroundColor: this.ToggleColor() }}>
        <Header
          style={{ backgroundColor: this.ToggleHeaderColor() }}
          androidStatusBarColor={this.ToggleStatusColor()}
          hasTabs
        >
          <Left>
            <Button onPress={() => Actions.MainView()} transparent>
              <AntDesign name="arrowleft" size={25} color="white" />
            </Button>
          </Left>
          <Body>
            <Title>HabitFormula</Title>
          </Body>
          <Right>
            <Button onPress={() => Actions.MainView()} transparent>
              <Text style={{ color: "white" }}>Cancel</Text>
            </Button>

            <Button onPress={() => this.CreateHabit()} transparent>
              <Text style={{ color: "white" }}>Save</Text>
            </Button>
          </Right>
        </Header>
        <Tabs
          tabContainerStyle={{
            backgroundColor: this.ToggleHeaderColor(),
            height: 20,
            paddingBottom: 5
          }}
          tabBarUnderlineStyle={{ backgroundColor: "white" }}
        >
          <Tab
            textStyle={{ marginLeft: -60, fontSize: 12 }}
            tabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            activeTabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            heading="Habit"
          >
            <Content
              style={{ backgroundColor: this.ToggleColor() }}
              scrollEnabled
            >
              <HabitFirstFormDe
                OnHabitNameChange={text => this.HabitName(text)}
                HabitNameValue={this.state.CreateHabitData.HabitName}
                OnHabitDescChange={Desc => this.HabitDescChange(Desc)}
                HabitDescValue={this.state.CreateHabitData.HabitDesc}
                OnHabitRes1Change={res1 => this.HabitRes1Change(res1)}
                HabitRes1Value={this.state.CreateHabitData.Reason.Res1}
                OnHabitRes2Change={res2 => this.HabitRes2Change(res2)}
                HabitRes2Value={this.state.CreateHabitData.Reason.Res2}
                OnHabitRes3Change={res3 => this.HabitRes3Change(res3)}
                HabitRe3Value={this.state.CreateHabitData.Reason.Res3}
              />
              {console.log(this.state.CreateHabitData)}
              <StartDateForm newDate={newDate => this.StartDate(newDate)} />

              <ScheduleForm
                DayOff_Sun={() => this.DaysOffSun()}
                FlexibleHabitNum={
                  this.state.CreateHabitData.Schedule.FlexibleData.HabitNum
                }
                FlexibleTextChange={num => this.FlexibleHabitNumber(num)}
                FlexibleValue={
                  this.state.CreateHabitData.Schedule.FlexibleData.HMValue
                }
                FlexibleValueChange={value => this.FlexibleValueMenu(value)}
                RepeatingTextValue={
                  this.state.CreateHabitData.Schedule.RepeatingData.HbNum
                }
                RepeatingTextChange={value => this.RepeatingText(value)}
                HMTvalue={this.state.CreateHabitData.Schedule.HMT.Text}
                OnHTWChange={text => this.HTWChangText(text)}
                HMTPickerValue={
                  this.state.CreateHabitData.Schedule.HMT.TimeValue
                }
                HWTPickerChangeValue={value => this.HMTPickerChange(value)}
              />

              <ArchivedForm
                SwitchValue={this.state.CreateHabitData.Archived}
                OnSwitchChange={() => this.SwitchChange()}
              />
            </Content>
          </Tab>
          <Tab
            textStyle={{ marginLeft: 20, fontSize: 12 }}
            tabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            activeTabStyle={{ backgroundColor: this.ToggleHeaderColor() }}
            heading="Reminder"
          >
            <CreateReminderTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ChangeStyle: state.HBMain.ChangeStyle,
  HabitInsider: state.HBHabits.HabitInsider,
  Habits: state.HBHabits.Habits,
  UpdateRe: state.HBHabits.UpdateRe
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { ChangeColor, CreateHabit, UpdateHabits }
)(CreateHabitTab);
