import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
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
export default class DateDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.showpreviousDay = this.showpreviousDay.bind(this);
  }
  showpreviousDay(timeArrow) {
    this.props.Increament(timeArrow);
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <div
            style={{ display: "inline-block", width: "384px", height: "40px" }}
          >
            <div
              style={{
                position: "relative",
                top: "10px",
                float: "left",
                width: "24px",
                height: "24px",
                color: "white"
              }}
            >
              <IconButton
                aria-label="delete"
                size="small"
                style={{ color: "white" }}
                onClick={this.showpreviousDay.bind(this, "backwards")}
              >
                <i class="material-icons"> keyboard_arrow_left</i>
              </IconButton>
            </div>
            <div
              style={{
                marginLeft: "8px",
                marginRight: "8px",
                width: "320px",
                height: "40px",
                display: "inline-block",
                float: "left",
                color: "white",
                textalign: "center"
              }}
            >
              {" "}
              <Typography align="center" variant="h4">
                {" "}
                {this.props.day === 0
                  ? "Today"
                  : this.props.day === 1
                  ? "Yestoday"
                  : "Day Before yestoday"}{" "}
              </Typography>
            </div>
            <div
              style={{
                position: "relative",
                top: "10px",
                float: "left",
                width: "24px",
                height: "24px",
                color: "white"
              }}
            >
              <IconButton
                aria-label="delete"
                size="small"
                style={{ color: "white" }}
                onClick={this.showpreviousDay.bind(this, "forwards")}
              >
                <i class="material-icons">keyboard_arrow_right</i>{" "}
              </IconButton>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
