import React from "react";
import "../css/FormControl-1.css";
import {
  FormControl,
  InputLabel,
  Typography,
  FormHelperText,
  Select,
  Button,
  IconButton
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {
  createMuiTheme,
  makeStyles,
  withStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import { ExpandMoreIcon } from "@material-ui/icons";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CloseIcon from "@material-ui/icons/Close";
import AddButton from "./MuiComponent/MuiButton-1";
import ServingUnitSelect from "./MuiComponent/ServingUnit_Select";
//Customize ADD Button

export default class SearchDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal_type: "breakfast",
      servingUnit: 1,
      nutrition: this.props.nutrition
    };
    this.handleMealTypeChange = this.handleMealTypeChange.bind(this);
    this.servingUnithandleChange = this.servingUnithandleChange.bind(this);
  }
  handleMealTypeChange(event) {
    this.setState({
      meal_type: event.target.value
    });
  }
  servingUnithandleChange(value) {
    this.setState({
      servingUnit: value
    });
  }

  render() {
    const style = {
      SearchDetail_Container: {
        boxSizing: "border-box",
        display: "inline-block",
        width: "304px",
        height: "auto",
        borderRadius: "4px",
        position: "absolute",
        left: 360,
        top: 155,
        boxShadow:
          "0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14)",
        //position placeholder
        padding: "16px",
        backgroundColor: "#fafafa",
        zIndex: 10
      },
      SearchDetail_Container_picture: {
        display: "inline-block",
        height: "64px",
        width: "64px",
        marginRight: "208px",
        marginBottom: "8px"
      },
      SearchDetail_Container_name: {
        display: "inline-block",
        width: "272px",
        height: "28px",
        fontFamily: "Roboto",
        fontSize: "24px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "rgba(0, 0, 0, 0.87)",
        wordWrap: "break-word",
        marginBlockStart: "0px",
        marginBlockEnd: "0px"
        // overflow:'scroll'
      },
      SearchDetail_Container_name_brand: {
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.75",
        letterSpacing: "0.5px",
        marginBlockStart: "7px",
        marginBlockEnd: "0px",
        color: "rgba(0, 0, 0, 0.6)"
      },
      SearchDetail_Container_seperator: {
        width: "270px",
        borderTopColor: "rgba(0, 0, 0, 0.87)",
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderLeftColor: "rgba(0, 0, 0, 0.87)",
        borderLeftStyle: "solid",
        borderLeftWidth: "1px",
        borderRightColor: "rgba(0, 0, 0, 0.87)",
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        marginTop: "16px",
        marginBottom: "16px",
        opacity: 0.12
      }
    };
    const brand = "Cheesewich";
    return (
      <div
        class="SearchDetail_Container"
        style={{ ...style.SearchDetail_Container }}
      >
        <div
          class="SearchDetail_Container_picture"
          style={{ ...style.SearchDetail_Container_picture }}
        >
          <img
            alt="111"
            src={"https://d2xdmhkmkbyw75.cloudfront.net/1150_highres.jpg"}
            style={{
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: 64,
              width: 64
            }}
          />{" "}
        </div>

        <p
          class="SearchDetail_Container_name"
          style={{ ...style.SearchDetail_Container_name }}
        >
          {" "}
          {/* {this.state.nutrition.foods[0].food_name}{" "} */}
          {"Hard Salami and Mild Cheddar Cheese"}
        </p>
        {brand ? (
          <p
            class="SearchDetail_Container_name_brand"
            style={{ ...style.SearchDetail_Container_name_brand }}
          >
            {brand}
          </p>
        ) : null}
        <div
          class="SearchDetail_Container_seperator"
          style={{ ...style.SearchDetail_Container_seperator }}
        />
        <ServingUnitSelect
          updateUnit={this.servingUnithandleChange}
          unit={this.state.servingUnit}
        />
        <Typography
          variant="h5"
          align="right"
          id="h5"
          style={{
            display: "inline-block",
            marginLeft: "7px",
            marginTop: "8px",
            width: 64,
            height: 28
          }}
        >
          {" "}
          {parseInt(
            this.state.servingUnit *
              this.state.nutrition.foods[0].serving_weight_grams,
            10
          ) || 28}
        </Typography>
        <Typography
          variant="h5"
          align="right"
          id="h5"
          style={{
            display: "inline-block",
            marginLeft: "8px",
            marginTop: "8px",
            width: 64,
            height: 28
          }}
        >
          {" "}
          {parseInt(
            this.state.servingUnit * this.state.nutrition.foods[0].nf_calories,
            10
          ) || 85}
        </Typography>
        <Typography
          variant="caption"
          style={{
            display: "inline-block",
            position: "relative",
            left: "136px",
            top: "-26px",
            textAlign: "right",
            width: "64px",
            height: "16px",
            color: "rgba(0, 0, 0, 0.6)",
            fontFamily: "Roboto",
            fontSize: "12px",
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "1.33",
            letterSpacing: "0.4px"
          }}
        >
          grams
        </Typography>
        <Typography
          variant="caption"
          style={{
            display: "inline-block",
            position: "relative",
            left: "144px",
            top: "-26px",
            textAlign: "right",
            width: "64px",
            height: "16px",
            color: "rgba(0, 0, 0, 0.6)",
            fontFamily: "Roboto",
            fontSize: "12px",
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "1.33",
            letterSpacing: "0.4px"
          }}
        >
          calories
        </Typography>
        <div
          class="SearchDetail_Container_seperator"
          style={{
            ...style.SearchDetail_Container_seperator,
            ...{ marginBottom: "14px", marginTop: "14px" }
          }}
        />
        <Typography
          variant="overline"
          style={{
            width: "272px",
            height: "16px",
            fontFamily: "Roboto",
            fontSize: "12px",
            fontWeight: "500",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "1.33",
            letterSpacing: "2px",
            color: "rgba(0, 0, 0, 0.6)",
            marginBottom: "5px"
          }}
        >
          {" "}
          ADD TO TODAY
        </Typography>
        <FormControl
          style={{
            marginTop: "6px",
            width: 272,
            height: 48,
            borderRadius: "4px"
          }}
          className="secondForm"
        >
          <Select
            value={this.state.meal_type}
            variant="filled"
            // displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            onChange={this.handleMealTypeChange}
            style={{
              // borderBottom: "1px",
              borderRadius: "4px"
            }}
            //.css({'padding-top': '12px','padding-bottom': '12px','height': '24px','width': '204px','padding-left': '16px','padding-right': '52px',})
          >
            <MenuItem value="breakfast">Breakfast</MenuItem>
            <MenuItem value="lunch">Lunch</MenuItem>
            <MenuItem value="dinner">Dinner</MenuItem>
            <MenuItem value="snack">Snack</MenuItem>
          </Select>
        </FormControl>
        {/* xia import from MuiButton.js */}
        <AddButton
          style={{ marginTop: "12px", marginLeft: "200px" }}
          onClick={this.props.addHandler.bind(this, {
            food_name: this.state.nutrition.foods[0].food_name,
            servingUnit: this.state.servingUnit,
            serving_weight_grams: this.state.nutrition.foods[0]
              .serving_weight_grams,
            nf_calories: this.state.nutrition.foods[0].nf_calories,
            serving_qty: this.state.nutrition.foods[0].serving_qty,
            meal_type: this.state.meal_type,
            thumb: this.props.nutrition.foods[0].photo.thumb
          })}
        >
          ADD
        </AddButton>
        <IconButton
          onClick={this.props.addHandler.bind(this, "")}
          style={{ position: "absolute", top: "21px", left: "269px" }}
        >
          <CloseIcon
            style={{ fill: "#6200ee", width: "14px", height: "14px" }}
          />
        </IconButton>
      </div>
    );
  }
}
