import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
              <i class="material-icons"> keyboard_arrow_left</i>
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
                {this.props.day}{" "}
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
              <i class="material-icons" >keyboard_arrow_right</i>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

// class DateDisplay extends React.Component{
//     render(){
//       return (
//        <ThemeProvider theme = {theme}>
//           <div className={classes.DateWrapper}>
//             <div className={classes.DateTab}>
//               <div className={classes.leftIcon}>
//                 <i class="material-icons"> keyboard_arrow_left</i>
//               </div>
//               <div className={classes.Date}>
//                 {" "}
//                 <Typography
//                   align="center"
//                   variant="h4"
//                   className={classes.DateText}
//                 >
//                   {" "}
//                   {this.props.day}{" "}
//                 </Typography>
//               </div>
//               <div className={classes.rightIcon}>
//                 <i class="material-icons">keyboard_arrow_right</i>
//               </div>
//             </div>
//           </div>
//        </ThemeProvider>
//       )
//     }
// }
