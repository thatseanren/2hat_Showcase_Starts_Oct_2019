import React, { Fragment } from "react";
import SearchBox from "./component/SearchBox";
import Profile from "./component/Profile";
// Material Ui
import FoodInfo from "./component/foodInfo";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import $ from "jquery";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.ClickDeligation = this.ClickDeligation.bind(this);
  }
  ClickDeligation() {
    this.props.Datehandler();
  }
  getInputFocus() {
    $(".react-autosuggest__input").focus();
  }
  render() {
    const secondWrapperStyle = {
      display: "inline-block",
      height: "572px",
      width: "1024px"
    };

    return (
      <Fragment>
        <SearchBox
          context={this.props.context}
          Datehandler={this.props.Datehandler}
          Foodhandler={this.props.Foodhandler}
        />
        <div class={"secondWrapper"} style={secondWrapperStyle}>
          <Profile diet={this.props.context} />
          <div
            style={{
              display: "inline-block",
              overflow: "auto",
              width: "704px",
              height: "572px"
            }}
          >
            <FoodInfo diet={this.props.context} />
          </div>
        </div>
        <ThemeProvider
          theme={createMuiTheme({
            overrides: {
              MuiFab: {
                secondary: {
                  backgroundColor: "#6200ee",
                  "&:hover": {
                    backgroundColor: "#6200ee",
                    opacity: 0.7,
                    // Reset on touch devices, it doesn't add specificity
                    "@media (hover: none)": {
                      backgroundColor: "#6200ee"
                    }
                  }
                }
              }
            }
          })}
        >
          <Fab
            color="secondary"
            aria-label="add"
            style={{ position: "absolute", left: 952, top: 628 }}
            onClick={this.getInputFocus}
          >
            <AddIcon />
          </Fab>
        </ThemeProvider>
      </Fragment>
    );
  }
}
