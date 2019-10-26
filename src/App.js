import React, { Fragment } from "react";
import SearchBox from "./component/SearchBox";
import Profile from "./component/Profile";
import ConsumedFood from "./component/Food";
// Material Ui
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import $ from "jquery";
import FoodInfo from "./component/foodInfo";
const nevStyles = makeStyles(theme => ({
  Container: {
    textAlign: "center",
    width: "1024px"
  }
}));
let diet = {
  first_name: "Jane",
  last_name: "Appleseed",
  height_cm: 163,
  weight_kg: 57,
  daily_goal: 1500,
  consumed:1400,
  data_points: [
    {
      //today's date
      date: "",
      //empty, let user do the input
      intake_list: []
    },
    {
      //yesterday's date
      date: "",
      intake_list: [
        {
          //branded food has nix_item_id, common food doesn't
          nix_item_id: "55c9298af0432259369100c4",
          food_name: "Italian sausage",
          serving_unit: "link",
          //weight of "serving_qty"
          serving_weight_grams: 75,
          //per unit of "nf_calories", see how Nutritionix website demo works
          serving_qty: 1,
          //that is per "serving_qty", see how Nutritionix website demo works
          nf_calories: 258,
          //that is how much user ate
          serving_size: 2,
          meal_type: "breakfast",
          thumb:
            "https://d1r9wva3zcpswd.cloudfront.net/55c92acdf04322593691010c.jpeg"
        },
        {
          food_name: "salmon salad",
          serving_unit: "cup",
          serving_weight_grams: 407.01,
          serving_qty: 1,
          nf_calories: 389.27,
          serving_size: 1.5,
          meal_type: "lunch",
          thumb: "https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"
        },
        {
          food_name: "boneless skinless chicken breasts",
          serving_qty: 1,
          serving_unit: "breast",
          serving_weight_grams: 120,
          nf_calories: 198,
          serving_size: 2,
          meal_type: "dinner",
          thumb: "https://d2xdmhkmkbyw75.cloudfront.net/7820_thumb.jpg"
        },
        {
          food_name: "slice cheese",
          serving_qty: 1,
          serving_unit: "slice",
          serving_weight_grams: 28,
          nf_calories: 113.12,
          serving_size: 2,
          meal_type: "snack",
          thumb: "https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"
        },
        {
          food_name: "orange",
          serving_qty: 1,
          serving_unit: 'fruit (2-7/8" dia)',
          serving_weight_grams: 140,
          nf_calories: 68.6,
          serving_size: 2,
          meal_type: "snack",
          thumb: "https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"
        }
      ]
    },
    {
      //2 days ago
      date: "",
      intake_list: [
        {
          food_name: "fried eggs",
          serving_qty: 1,
          serving_unit: "large",
          serving_weight_grams: 46,
          nf_calories: 90.16,
          serving_size: 2,
          meal_type: "breakfast",
          thumb: "https://d2xdmhkmkbyw75.cloudfront.net/1741_thumb.jpg"
        },
        {
          food_name: "chicken salad",
          serving_qty: 0.5,
          serving_unit: "cup",
          serving_weight_grams: 112.1,
          nf_calories: 253.99,
          serving_size: 1,
          meal_type: "lunch",
          thumb: "https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"
        },
        {
          nix_item_id: "598c0695306b814040ff908b",
          food_name: "Boneless Skinless Chicken Breasts",
          serving_unit: "oz",
          serving_qty: 4,
          nf_calories: 110,
          serving_size: 1,
          meal_type: "dinner",
          thumb:
            "https://d1r9wva3zcpswd.cloudfront.net/5c04d53ff01a65ec7b2089dd.jpeg"
        },
        {
          food_name: "slice cheese",
          serving_qty: 1,
          serving_unit: "slice",
          serving_weight_grams: 28,
          nf_calories: 113.12,
          serving_size: 2,
          meal_type: "snack",
          thumb: "https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"
        },
        {
          food_name: "orange",
          serving_qty: 1,
          serving_unit: 'fruit (2-7/8" dia)',
          serving_weight_grams: 140,
          nf_calories: 68.6,
          serving_size: 2,
          meal_type: "snack",
          thumb: "https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"
        }
      ]
    }
  ]
};
export default class App extends React.Component {
  // componentDidMount() {
  //     $.ajax({
  //     url: "https://trackapi.nutritionix.com/v2/search/instant",
  //     method: "GET",
  //     data: { query: "fish" },
  //     headers: {
  //       "x-app-id": "84de5f10",
  //       "x-app-key": "cd4754d56e0adf95486a6454261cb7d0",
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //     success: function(response, text, xhr) {
  //       const foodCommon = xhr.responseJSON.common;
  //       const foodBranded = xhr.responseJSON.branded;
  //       console.log("Common");
  //       for (var id in foodCommon) {
  //         console.log(foodCommon[id]["food_name"]);
  //       }
  //       console.log("branded");
  //       for (var id in foodBranded) {
  //         console.log(foodBranded[id]["food_name"]);
  //       }
  //       console.log(xhr.responseJSON);
  //       console.log(typeof foodCommon);
  //     }
  //   });
  // }
  // const classes = nevStyles();
  render() {
    const secondWrapperStyle = {
      display: "inline-block",
      height: "572px",
      width: "1024px"
    };
    return (
      <Fragment>
        {/* <Container fixed classes='{classes.Container}'> */}
        <SearchBox />
        <div class={"secondWrapper"} style={secondWrapperStyle}>
          <Profile diet={diet} />
          <FoodInfo />
          <FoodInfo />
          <FoodInfo />
          <FoodInfo />
        </div>
        {/* </Container> */}
      </Fragment>
    );
  }
}
