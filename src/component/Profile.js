import React, { Fragment } from "react";
import MealDetail from "./mealDetail";
import { Avatar } from "@material-ui/core";
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
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0.25px",
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
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.33",
    letterSpecing: "0.4px",
    color: "#ffffff"
  },
  photo: {
    width: "96px",
    height: "96px",
    display: "inline-block",
    borderRadius: "50%",
    // backgroundColor: "green",
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
    top: "56px",
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
    top: "56px",
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
    position: "absolute",
    top: "373px",
    display: "inline-block",
    width: 144,
    height: 16,
    fontSize: "12px",
    letterSpacing: "0.4px",
    color: "rgba(0, 0, 0, 0.6)",
    lineHeight: "1.33"
  },
  //Consumed style
  textfield1: {
    left: "16px",
    textAlign: "left"
  },
  //Daily Goal style
  textfield2: {
    left: "160px",
    textAlign: "right"
  },
  progressBar: {
    position: "absolute",
    display: "inline-block",
    top: "405px",
    left: "24px",
    width: "288px",
    height: "4px",
    opacity: "0.24",
    backgroundColor: "#6200ee"
  },
  progressBar_top: {
    position: "absolute",
    display: "inline-block",
    top: "405px",
    left: "24px",
    height: "4px",
    // opacity:'0.24',
    backgroundColor: "#6200ee"
  },
  progressPercentage: {
    // display:'block',
    width: "56px",
    height: "24px",
    position: "absolute",
    left: "288px",
    top: "413px",
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
  getFoodObjectByMealType() {
    let mealDetail = { breakfast: [], lunch: [], dinner: [], snack: [] };
    this.props.diet.diet.data_points[this.props.diet.date].intake_list.forEach(
      element => {
        mealDetail[element.meal_type].push(element);
      }
    );
    return mealDetail;
  }
  getConsumed() {
    const data = this.getFoodObjectByMealType();
    let breakfast = 0;
    let lunch = 0;
    let dinner = 0;
    let snacks = 0;
    data.breakfast.forEach(element => {
      breakfast += element.nf_calories * element.serving_qty;
    });
    data.lunch.forEach(element => {
      lunch += element.nf_calories * element.serving_qty;
    });
    data.dinner.forEach(element => {
      dinner += element.nf_calories * element.serving_qty;
    });
    data.snack.forEach(element => {
      snacks += element.nf_calories * element.serving_qty;
    });
    return parseInt((breakfast + lunch + dinner + snacks),10);
  }
  getProgressBarPercentage() {
    return Math.floor(
      (this.getConsumed() / this.props.diet.diet.daily_goal) * 100
    );
  }
  render() {
    return (
      <Fragment>
        <div className="classes.profile" class="profile" style={style.profile}>
          <div

            class = 'weight'
            style={Object.assign({}, style.weight, style.heightWeight)}
          >
            <div style={style.numberInCircle}>{57}</div>
            <div style={style.unitInCircle}>{"kg"}</div>
          </div>
          {/* <div className="{classes.photo}" style={style.photo} /> */}
          <Avatar
            alt="Sean"
            src="./static/istockphoto-476085198-612x612.jpg"
            style={style.photo}
          />
          <div

            class = 'height'
            style={Object.assign({}, style.height, style.heightWeight)}
          >
            <div style={style.numberInCircle}>{133}</div>
            <div style={style.unitInCircle}>{"cm"}</div>
          </div>
          <div className="NameField" style={style.NameField}>
            {this.props.diet.diet.first_name} {this.props.diet.diet.last_name}
          </div>
          <div class='Seperate' style={style.Seperate} />
          <div className="{classes.consumed}"  class = 'consumed' style={style.consumed}>
            {this.getConsumed()}
            {" cal"}
          </div>
          <div className="{classes.consumed}" class = 'dailygoal' style={style.dailyGoal}>
            {this.props.diet.diet.daily_goal}
            {" cal"}
          </div>
          <div
            className="{classes.textfield1}"
            class='consumed_text'
            style={{ ...style.textfield1, ...style.ConsDaily }}
          >
            consumed
          </div>
          <div
            className="{classes.textfield2}"
            class = 'daily_goal_text'
            style={{ ...style.textfield2, ...style.ConsDaily }}
          >
            daily goal
          </div>
          <div className="{classes.progressBar}" class = 'progressBar_base' style={style.progressBar} />
          <div
            className="{classes.progressBar}"
            class = 'progressBar'
            style={{
              ...style.progressBar_top,
              ...{
                width:
                  this.getProgressBarPercentage() > 100
                    ? 288
                    : this.getProgressBarPercentage() * 2.88
              }
            }}
          />
          <div
            className="progressPercentage"
            class = 'progressPercent'
            style={{
              ...style.progressPercentage,
              ...{
                left:
                  this.getProgressBarPercentage() < 15
                    ? this.getProgressBarPercentage() * 2.88 + 20
                    : this.getProgressBarPercentage() > 100
                    ? 288
                    : this.getProgressBarPercentage() * 2.88
              }
            }}
          >
            {this.getProgressBarPercentage()}
            {"%"}
          </div>
          <MealDetail data={this.getFoodObjectByMealType()} />
          {/* <MealDetail meal_calories={lunch} meal_type={"Lunch"} />
          <MealDetail meal_calories={dinner} meal_type={"Dinner"} />
          <MealDetail meal_calories={snacks} meal_type={"Snack"} /> */}
        </div>
      </Fragment>
    );
  }
}
