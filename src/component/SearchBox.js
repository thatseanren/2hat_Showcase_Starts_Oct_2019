import React, { Fragment } from "react";
import DateDisplay from "./DateDisplay";
import SearchIcon from "@material-ui/icons/Search";
import Autosuggests from './AutoSuggests';
import { createMuiTheme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles";
const theme = createMuiTheme({
  typography: {
    h4: {
      fontSize: "34px",
      fontStyle: "normal",
      fontFamily: "Roboto",
      letterSpacing: "0.25px",
      fontWeight: "normal"
    }
  }
});
export default class SearchBox extends React.Component {
  // componentDidMount() {
  //   // Request nutrition facts of the food
  //   $.ajax({
  //     async: true,
  //     crossDomain: true,
  //     url: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  //     method: "POST",
  //     headers: {
  //       "x-app-id": "84de5f10",
  //       "x-app-key": "cd4754d56e0adf95486a6454261cb7d0",
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //     processData: true,
  //     data: {
  //       query: "cheese"
  //     },
  //     success: function(response, text, xhr) {
  //       console.log(xhr);
  //     },
  //     error: function(textstatus) {
  //       console.log(textstatus);
  //     }
  //   });
  // }
  render() {
    return (
      <Fragment>
        <div
          className="searchBar"
          style={{
            width: "1024px",
            height: "128px",
            display:"inline-block",
            backgroundColor: "#6200ee"
          }}
        >
          <div
            className="search"
            style={{
              display: "inline-block",
              marginTop: "8px",
              marginLeft: "302px",
              marginRight: "302px",
              borderRadius: theme.shape.borderRadius,
              backgroundColor: "#ffffff",
              width: "420px",
              height: "48px",
              color:"black"
              
            }}
          >
            <div
              className="searchIcon"
              style={{
                position: "relative",
                top: "12px",
                left: "12px",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "24px",
                height: "24px",
                backgroundColor: fade(theme.palette.common.white, 0.25),
                color: "rgba(0, 0, 0, 0.54)"
              }}
            >
              <SearchIcon color="inherit" />
            </div>
            {/* oringnal input without autosuggestion */}
            {/* <InputBase
              placeholder="Search…"
              classes={{
                root: "classes.inputRoot",
                input: "classes.inputInput"
              }}
              style={{
                color: "inherit",
                position: "relative",
                left: "52px",
                top: "-15px"
              }}
            /> */}
            {/* autosuggestion component  */}
            {/* <Autosuggest /> */}
            <Autosuggests />
          </div>
          <DateDisplay day="Today" />
        </div>
      </Fragment>
    );
  }
}
