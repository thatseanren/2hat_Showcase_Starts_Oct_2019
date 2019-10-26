import React from "react";

export default class MealDetail extends React.Component{
  render(){
    const wrapperStyle = {
      display:"inline-block",
      width:"66px",
      height:"40px",
      position:"relative",
      top:"76px",
      left:"16px",
      'margin-right':'8px',
    //  'background-color':"yellow"
    }
    const Style1 = {
      width: '66px',
      height: '24px',
      display:"inline-block",
      'fontFamily': 'Roboto',
      'fontSize': '20px',
      'fontWeight': '500',
      'fontStretch':' normal',
      'fontStyle':' normal',
      'lineHeight':' normal',
      'letterSpacing': '0.25px',
      'textAlign': 'center',
      'color': 'rgba(0, 0, 0, 0.87)',
    }
    const Style2 = {
      width: '66px',
      height: '16px',
      display:"inline-block",
      'fontFamily': 'Roboto',
      'fontSize': '12px',
      'fontWeight': 'normal',
      'fontStretch':' normal',
      'fontStyle':' normal',
      'lineHeight':' 1.33',
      'letterSpacing': '0.4px',
      'textAlign': 'center',
      'color': 'rgba(0, 0, 0, 0.6)',
    }
    return(
      <div class="mealDetail" style = {wrapperStyle}>
        <span style = {Style1}>{this.props.meal_calories}</span>
        <span style = {Style2}>{this.props.meal_type}</span>
      </div>
    )
  }
}