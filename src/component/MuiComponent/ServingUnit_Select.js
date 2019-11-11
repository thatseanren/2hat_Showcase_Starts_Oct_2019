import React from "react";
import "../../css/FormControl-1.css";

import {
  FormControl,
  Select,
  InputLabel,
  FormHelperText,
  MenuItem
} from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
export default class FormM extends React.Component {
  constructor(props) {
    super(props);
    this.servingUnithandleChange = this.servingUnithandleChange.bind(this);
  }
  servingUnithandleChange(event) {
    this.props.updateUnit(event.target.value);
    console.log(event.target.value);
  }
  render() {
    return (
      <FormControl
        variant="filled"
        //Temprary inline-style
        style={{ width: 120, height: 56, marginRight: "8px",marginBottom:'3px' }}
      >
        <InputLabel shrink>Serving</InputLabel>
        <Select
          variant="filled"
          IconComponent={UnfoldMoreIcon}
          onChange={this.servingUnithandleChange}
          value={this.props.unit}
        >
          <MenuItem value={1}>1.0</MenuItem>
          <MenuItem value={2}>2.0</MenuItem>
          <MenuItem value={3}>3.0</MenuItem>
        </Select>
        <FormHelperText>{"stick"}</FormHelperText>
      </FormControl>
    );
  }
}
