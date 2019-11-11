import React, { Fragment } from "react";
import CardMedia from "@material-ui/core/CardMedia";
export default class FoodInfo extends React.Component {
  render() {
    const style = {
      wrapper: {
        display: "inline-block",
        width: "704px",
        height: "72px",
        float: "left"
      },

      foodPicture: {
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: 4,
        display: "inline-block",
        width: "40px",
        height: "40px",
        top: "16px",
        left: "16px",
        float: "left",
        marginRight: "16px",
        marginTop: "16px",
        marginLeft: "16px"
      },

      foodName: {
        width: "524px",
        height: "24px",
        marginTop: "14px",
        marginRight: "8px",

        fontSize: "16px",
        fontWeight: "500",

        lineHeight: "1.5",
        letterSpacing: "0.15px",
        color: "rgba(0, 0, 0, 0.87)"
      },
      servingSize: {
        width: "524px",
        height: "20px",

        marginRight: "8px",
        float: "left",

        fontSize: "14px",
        fontWeight: "normal",

        lineHeight: "1.43",
        letterSpacing: "0.25px",
        color: "rgba(0, 0, 0, 0.6)"
      },
      energy: {
        width: "64px",
        height: "24px",

        fontSize: "16px",
        fontWeight: "500",

        textAlign: "right",
        lineHeight: "1.5",
        letterSpacing: "0.15px",
        color: "rgba(0, 0, 0, 0.87)"
      },
      mealType: {
        width: "64px",
        height: "24px",

        fontSize: "14px",
        fontWeight: "normal",
        textAlign: "right",

        lineHeight: "1.43",
        letterSpacing: "0.25px",
        color: "rgba(0, 0, 0, 0.6)"
      },
      //mutual style used by mealType, energy. servingSize, and foodName
      fontStyle: {
        display: "inline-block",
        fontStretch: "normal",
        fontStyle: "normal",
        fontFamily: "Roboto"
      }
    };
    return (
      <Fragment>
        {this.props.diet.diet.data_points[this.props.diet.date].intake_list.map(
          item => (
            <div class="foodInfo" key={item.food_name} style={style.wrapper}>
              <CardMedia
                class="foodPicture"
                style={style.foodPicture}
                image={item.thumb}
              />
              <span
                class="foodName"
                style={{
                  ...style.foodName,
                  ...style.fontStyle
                }}
              >
                {" "}
                {item.food_name}
              </span>
              <span
                class="servingSize"
                style={{
                  ...style.servingSize,
                  ...style.fontStyle
                }}
              >
                {item.serving_qty} {item.serving_unit}{" "}
                {"(" + item.serving_weight_grams + " g)"}
              </span>
              <span
                class="calories"
                style={{ ...style.energy, ...style.fontStyle }}
              >
                {parseInt(item.nf_calories) + " cal"}
              </span>
              <span
                class="meal_type"
                style={{
                  ...style.mealType,
                  ...style.fontStyle
                }}
              >
                {item.meal_type}
              </span>
              <div
                style={{
                  width: "632px",
                  height: "1px",
                  opacity: "0.12",
                  backgroundColor: "rgba(0, 0, 0, 0.87)",
                  position: "relative",
                  left: 72,
                  top: 9
                }}
              >
                {" "}
              </div>
            </div>
          )
        )}
      </Fragment>
    );
  }
}
