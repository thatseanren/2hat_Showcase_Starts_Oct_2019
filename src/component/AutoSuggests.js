import React from "react";
import Autosuggest from "react-autosuggest";
import "./AutoSuggests.css";
import $ from "jquery";
function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  const name = suggestion.name;

  return (
    <div>
      <img src={suggestion.url} alt="food" />
      <span>{name[0].toUpperCase() + name.slice(1)}</span>
      <div
        class="rectangle-3"
        style={{
          width: "348px",
          height: "1px",
          opacity: "0.12",
          "background-color": "rgba(0, 0, 0, 0.87)",
          position: "relative",
          left: "72px",
          top: "24px"
        }}
      />
    </div>
  );
}

function renderSectionTitle(section) {
  return <strong>{section.title.toUpperCase()}</strong>;
}

function getSectionSuggestions(section) {
  return section.foodList;
}

export default class AutoSuggests extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.getSuggestions = this.getSuggestions.bind(this);
  }

  getSuggestions(value) {
    //when user input keywords, a suggestion list will be retrieved by sending following ajax reuquest
    $.ajax({
      url: "https://trackapi.nutritionix.com/v2/search/instant",
      method: "GET",
      data: { query: value },
      headers: {
        "x-app-id": "84de5f10",
        "x-app-key": "cd4754d56e0adf95486a6454261cb7d0",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(response, text, xhr) {
        try {
          var arr = [];
          const rawDataa = xhr.responseJSON;
          for (var a = 0; a < 2; a++) {
            var obj = { title: Object.keys(rawDataa)[a] };
            obj.foodList = [];
            for (var b = 0; b < rawDataa[obj.title].length; b++) {
              obj.foodList[b] = {};
              obj.foodList[b].name = rawDataa[obj.title][b]["food_name"];
              obj.foodList[b].url = rawDataa[obj.title][b].photo.thumb;
            }
            arr.push(obj);
          }
          this.setState({
            suggestions: arr
          });
          console.log(this.state.suggestions);
        } catch (error) {
          console.error(error);
        }
      }.bind(this) //this refers to class Autosuggests
    });
  }
  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value, reason }) {
    this.getSuggestions(value);
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search food...",
      value,
      onChange: this.onChange
    };
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        multiSection={true}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
      />
    );
  }
}

//  // provide a object, which consists both branded and common food list derived from AJAX response
//   //This object will only consists name and picture_url of common food, name, picture_url and brand of branded food
//   var arr = []; // payload reserved for suggestion state
//   var foodCommon = {}; //payload of CommonFood section
//   var foodBranded = {}; //oayload of BrandedFood section
//   foodCommon.title = Object.keys(requestedJSON)[0];
//   foodCommon.suggestions = [];
//   function makeSugtn(value) {
//     for (var a = 0; a < value.length; a++) {
//       var obj = {};
//       obj.name = Object.values(value[a])[0]; // retrieve the name value
//       obj.url = Object.values(Object.values(Object.values(value)[a])[6])[0]; // retrieve the url
//       foodCommon.suggestions[a] = obj; //push into the suggestion payload
//     }
//   }
//   makeSugtn(Object.keys(requestedJSON)[0]);
//   //filling brandedfood object which will be push into 'arr'
//   foodBranded.title = Object.keys(requestedJSON)[1];
//   foodBranded.suggestions = [];
//   function makeSugtn_Branded(value) {
//     for (var a = 0; a < value.length; a++) {
//       var obj = {};
//       obj.name = Object.values(value[a])[0]; // retrieve the name value
//       obj.url = Object.values(Object.values(Object.values(value)[a])[6])[0]; // retrieve the url
//       obj.brand = Object.values(value[a])[7];
//       foodBranded.suggestions.push(obj); //push into the suggestion payload
//     }
//   }
//   makeSugtn_Branded(requestedJSON[Object.keys(requestedJSON)[1]]);
//   arr.push(foodCommon);
//   arr.push(foodBranded);
