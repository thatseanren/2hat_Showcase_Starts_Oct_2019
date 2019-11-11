import React, { Fragment } from "react";
import DateDisplay from "./DateDisplay";
import SearchIcon from "@material-ui/icons/Search";
import Autosuggests from "./AutoSuggests";
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
  render() {
    return (
      <div
        className="searchBar"
        style={{
          width: "1024px",
          height: "128px",
          display: "inline-block",
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
            color: "black"
          }}
        >
          <div
            className="searchIcon"
            style={{
              position: "absolute",
              top: "20px",
              left: "314px",
              pointerEvents: "none",
              display: "inline-block",
              alignItems: "center",
              justifyContent: "center",
              width: "20.5px",
              heigth: "20.5px",
              padding: "3.5px",
              backgroundColor: fade(theme.palette.common.white, 0.25),
              color: "rgba(0, 0, 0, 0.54)"
            }}
          >
            <SearchIcon color="inherit" />
          </div>

          <Autosuggests Foodhandler={this.props.Foodhandler} />
        </div>
        <DateDisplay
          day={this.props.context.date}
          Increament={this.props.Datehandler}
        />
      </div>
    );
  }
}
