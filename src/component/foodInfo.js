import React from "react";

export default class FoodInfo extends React.Component {
  render() {
    const style = {
      wrapper: {
        display: "inline-block",
        width: "704px",
        height: "72px",
        backgroundColor: "#3FBFBF",
        float: "left"
      },

      foodPicture: {
        backgroundColor: "white",
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
        marginRight: "18px",

        fontSize: "16px",
        fontWeight: "500",

        lineHeight: "1.5",
        letterSpacing: "0.15px",
        color: "rgba(0, 0, 0, 0.87)"
      },
      servingSize: {
        width: "524px",
        height: "20px",

        marginRight: "32px",
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

        lineHeight: "1.5",
        letterSpacing: "0.15px",
        color: "rgba(0, 0, 0, 0.87)"
      },
      mealType: {
        width: "64px",
        height: "24px",

        fontSize: "14px",
        fontWeight: "normal",

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
      <div class="foodInfo" style={style.wrapper}>
        <div class="foodPicture" style={style.foodPicture} />
        <span
          class="foodName"
          style={{
            ...style.foodName,
            ...style.fontStyle
          }}
        >
          {" "}
          Cheese
        </span>
        <span
          class="servingSize"
          style={{
            ...style.servingSize,
            ...style.fontStyle
          }}
        >
          1 slice (28 g)
        </span>
        <span class="calories" style={{ ...style.energy, ...style.fontStyle }}>
          113 cal
        </span>
        <span
          class="meal_type"
          style={{
            ...style.mealType,
            ...style.fontStyle
          }}
        >
          Snack
        </span>
      </div>
    );
  }
}
