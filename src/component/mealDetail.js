import React, { Fragment } from "react";

export default class MealDetail extends React.Component {
  getRenderComponent() {}
  render() {
    const wrapperStyle = {
      display: "inline-block",
      width: "66px",
      height: "40px",
      position: "absolute",
      top: "453px",
      // left: "16px",
      marginRight: "8px"
      //  'background-color':"yellow"
    };
    const Style1 = {
      width: "66px",
      height: "24px",
      display: "inline-block",
      fontFamily: "Roboto",
      fontSize: "20px",
      fontWeight: "500",
      fontStretch: " normal",
      fontStyle: " normal",
      lineHeight: " normal",
      letterSpacing: "0.25px",
      textAlign: "center",
      color: "rgba(0, 0, 0, 0.87)"
    };
    const Style2 = {
      width: "66px",
      height: "16px",
      display: "inline-block",
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: "normal",
      fontStretch: " normal",
      fontStyle: " normal",
      lineHeight: " 1.33",
      letterSpacing: "0.4px",
      textAlign: "center",
      color: "rgba(0, 0, 0, 0.6)"
    };
    let breakfast = 0;
    let lunch = 0;
    let dinner = 0;
    let snacks = 0;
    this.props.data.breakfast.forEach(element => {
      breakfast += element.nf_calories * element.serving_qty;
    });
    this.props.data.lunch.forEach(element => {
      lunch += element.nf_calories * element.serving_qty;
    });
    this.props.data.dinner.forEach(element => {
      dinner += element.nf_calories * element.serving_qty;
    });
    this.props.data.snack.forEach(element => {
      snacks += element.nf_calories * element.serving_qty;
    });
    return (
      <Fragment>
        <div class="mealDetail" style={{ ...wrapperStyle, ...{ left: 16 } }}>
          <span style={Style1}>{parseInt(breakfast)}</span>
          <span style={Style2}>{"breakfast"}</span>
        </div>
        <div class="mealDetail" style={{ ...wrapperStyle, ...{ left: 90 } }}>
          <span style={Style1}>{parseInt(lunch)}</span>
          <span style={Style2}>{"lunch"}</span>
        </div>
        <div class="mealDetail" style={{ ...wrapperStyle, ...{ left: 164 } }}>
          <span style={Style1}>{parseInt(dinner)}</span>
          <span style={Style2}>{"dinner"}</span>
        </div>
        <div class="mealDetail" style={{ ...wrapperStyle, ...{ left: 238 } }}>
          <span style={Style1}>{parseInt(snacks)}</span>
          <span style={Style2}>{"snacks"}</span>
        </div>
      </Fragment>

      // <span>{this.props.data.breakfast[0].food_name}</span>
    );
  }
}
