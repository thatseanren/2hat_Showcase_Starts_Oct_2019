import  {Button,} from "@material-ui/core";
import {  withStyles } from "@material-ui/core/styles";

export default withStyles({
  root: {
    background: "#6200ee",
    borderRadius: 4,
    border: 0,
    color: "white",
    height: 36,
    width: 72,
    padding: "0 30px",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)",
    "&:hover": {
      backgroundColor: "#6200ee",
      borderColor: "#6200ee",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "#6200ee",
      backgroundColor: "#6200ee",
      borderColor: "#6200ee"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  },
  label: {
    width: "40px",
    height: "16px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.14",
    letterSpacing: "1.25px",
    textAlign: "center",
    color: " #ffffff"
  }
})(Button);
