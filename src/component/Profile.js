import React, { Fragment } from "react";
import MealDetail from "./mealDetail";
const style = {
  profile: {
    width: "320px",
    height: "572px",
    display: "inline-block",
    backgroundColor: "#f5f5f5",
    float: "left"
  },
  //mutual style used by height and weight element
  heightWeight: {
    width: "56px",
    height: "56px",
    position: "relative",
    borderRadius: "50%",
    backgroundColor: "rgba( 0 ,0 ,0, 0.5)",
    display: "inline-block"
  },
  weight: {
    left: "32px",
    top: "4px"
  },
  height: {
    left: "80px",
    top: "4px"
  },
  // styles for number in weight and height element  '57' & '133' in kg and cm
  numberInCircle: {
    display: "inline-block",
    width: "40px",
    height: "24px",
    float: "left",
    position: "relative",
    top: "8px",
    left: "8px",
    "text-align": "center",
    "font-family": "Roboto",
    "font-size": "20px",
    "font-weight": 500,
    "font-stretch": "normal",
    "font-style": "normal",
    "line-height": "normal",
    "letter-spacing": "0.25px",
    color: "#ffffff"
  },
  // styles for unit text in weight and height element eg. 'kg' & 'cm'
  unitInCircle: {
    display: "inline-block",
    width: "40px",
    height: "16px",
    float: "left",
    position: "relative",
    top: "8px",
    left: "8px",
    "text-align": "center",
    "font-family": "Roboto",
    "font-size": "12px",
    "font-weight": "normal",
    "font-stretch": "normal",
    "font-style": "normal",
    "line-height": "1.33",
    "letter-spacing": "0.4px",
    color: "#ffffff"
  },
  photo: {
    width: "96px",
    height: "96px",
    display: "inline-block",
    borderRadius: "50%",
    backgroundColor: "green",
    position: "relative",
    top: "24px",
    left: "56px"
  },
  NameField: {
    width: "288px",
    height: "28px",
    position: "relative",
    display: "inline-block",
    marginBottom: "32px",
    top: "32px",
    left: "16px",
    textAlign: "Center",
    fontFamily: "Roboto",
    fontSize: "24px",
    color: "rgba(0,0,0,0.87r)"
  },
  Seperate: {
    width: "320px",
    height: "1px",
    opacity: "0.12",
    backgroundColor: "black",
    position: "relative",
    top: "32px"
  },
  consumed: {
    width: "144px",
    height: "28px",
    position: "relative",
    top: "55px",
    left: "16px",
    fontFamily: "Roboto",
    fontSize: "24px",
    letterSpacing: "normal",
    float: "left",
    fontWeight: "normal"
  },
  dailyGoal: {
    width: "144px",
    height: "28px",
    position: "relative",
    left: "16px",
    top: "55px",
    display: "inline-block",
    textAlign: "right",
    fontFamily: "Roboto",
    fontSize: "24px",
    letterSpacing: "normal",
    fontWeight: "normal"
  },
  // mutual styles used in plain text 'Consumed' and 'Daily Goal'
  ConsDaily: {
    fontFamily: "Roboto",
    position: "relative",
    top: "53px",
    display: "inline-block",
    fontSize: "12px",
    letterSpacing: "0.4px",
    color: "rgba(0, 0, 0, 0.6)",
    lineHeight: "1.33"
  },
  //Consumed style
  textfield1: {
    left: "15px",
    textAlign: "left"
  },
  //Daily Goal style
  textfield2: {
    left: "184px",
    textAlign: "right"
  },
  progressBar: {
    position: "relative",
    display: "inline-block",
    top: "59px",
    left: "16px",
    width: "288px",
    height: "4px",
    backgroundColor: "#6200ee"
  },
  progressPercentage: {
    width: "56px",
    height: "24px",
    position: "relative",
    left: "273px",
    top: "60px",
    textAlign: "left",
    fontFamily: "Roboto",
    lineHeight: "1.71",
    fontSize: "14px",
    fontWeight: "500"
  },
  breakfast: {
    position: "absolute",
    top: "387px",
    left: "16px"
  }
};
export default class Profile extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="classes.profile" class="profile" style={style.profile}>
          <div
            className="{classes.weight}"
            style={Object.assign({}, style.weight, style.heightWeight)}
          >
            <div style={style.numberInCircle}>{57}</div>
            <div style={style.unitInCircle}>{"kg"}</div>
          </div>
          <div className="{classes.photo}" style={style.photo} />
          <div
            className="{classes.height}"
            style={Object.assign({}, style.height, style.heightWeight)}
          >
            <div style={style.numberInCircle}>{133}</div>
            <div style={style.unitInCircle}>{"cm"}</div>
          </div>
          <div className="NameField" style={style.NameField}>
            {this.props.diet.first_name} {this.props.diet.last_name}
          </div>
          <div className="{classes.Seperate}" style={style.Seperate} />
          <div className="{classes.consumed}" style={style.consumed}>
            {this.props.diet.consumed}
            {" cal"}
          </div>
          <div className="{classes.consumed}" style={style.dailyGoal}>
            {this.props.diet.daily_goal}
            {" cal"}
          </div>
          <div
            className="{classes.textfield1}"
            style={{ ...style.textfield1, ...style.ConsDaily }}
          >
            Consumed
          </div>
          <div
            className="{classes.textfield2}"
            style={{ ...style.textfield2, ...style.ConsDaily }}
          >
            Daily Goal
          </div>
          <div className="{classes.progressBar}" style={style.progressBar} />
          <div className="progressPercentage" style={style.progressPercentage}>
            {Math.floor(
              (this.props.diet.consumed / this.props.diet.daily_goal) * 100
            )}
            {"%"}
          </div>
          <MealDetail meal_calories={123} meal_type={"Breakfast"} />
          <MealDetail meal_calories={570} meal_type={"Lunch"} />
          <MealDetail meal_calories={453} meal_type={"Dinner"} />
          <MealDetail meal_calories={113} meal_type={"Snack"} />
        </div>
      </Fragment>
    );
  }
}
