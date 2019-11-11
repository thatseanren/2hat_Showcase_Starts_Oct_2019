import React, { Fragment } from "react";
import Autosuggest from "react-autosuggest";
import "../css/AutoSuggests.css";
import $ from "jquery";
import SearchDetail from "./SearchDetail";
var t;
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
          backgroundColor: "rgba(0, 0, 0, 0.87)",
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
      suggestions: [],
      displayResult: false,
      result: {
        foods: [
          {
            food_name: "cheese sticks",
            brand_name: null,
            serving_qty: 1,
            serving_unit: "Stick",
            serving_weight_grams: 28.35,
            nf_calories: 85.05,
            nf_total_fat: 6.34,
            nf_saturated_fat: 3.73,
            nf_cholesterol: 22.4,
            nf_sodium: 177.75,
            nf_total_carbohydrate: 0.62,
            nf_dietary_fiber: 0,
            nf_sugars: 0.29,
            nf_protein: 6.29,
            nf_potassium: 21.55,
            nf_p: 100.36,
            full_nutrients: [
              {
                attr_id: 203,
                value: 6.2852
              },
              {
                attr_id: 204,
                value: 6.3362
              },
              {
                attr_id: 205,
                value: 0.6209
              },
              {
                attr_id: 207,
                value: 0.9299
              },
              {
                attr_id: 208,
                value: 85.05
              },
              {
                attr_id: 210,
                value: 0.0085
              },
              {
                attr_id: 211,
                value: 0.1588
              },
              {
                attr_id: 212,
                value: 0.0425
              },
              {
                attr_id: 213,
                value: 0.0199
              },
              {
                attr_id: 214,
                value: 0.0227
              },
              {
                attr_id: 221,
                value: 0
              },
              {
                attr_id: 255,
                value: 14.1778
              },
              {
                attr_id: 262,
                value: 0
              },
              {
                attr_id: 263,
                value: 0
              },
              {
                attr_id: 268,
                value: 355.509
              },
              {
                attr_id: 269,
                value: 0.292
              },
              {
                attr_id: 287,
                value: 0.0425
              },
              {
                attr_id: 291,
                value: 0
              },
              {
                attr_id: 301,
                value: 143.1675
              },
              {
                attr_id: 303,
                value: 0.1247
              },
              {
                attr_id: 304,
                value: 5.67
              },
              {
                attr_id: 305,
                value: 100.359
              },
              {
                attr_id: 306,
                value: 21.546
              },
              {
                attr_id: 307,
                value: 177.7545
              },
              {
                attr_id: 309,
                value: 0.8278
              },
              {
                attr_id: 312,
                value: 0.0031
              },
              {
                attr_id: 315,
                value: 0.0085
              },
              {
                attr_id: 317,
                value: 4.8195
              },
              {
                attr_id: 318,
                value: 191.646
              },
              {
                attr_id: 319,
                value: 49.329
              },
              {
                attr_id: 320,
                value: 50.7465
              },
              {
                attr_id: 321,
                value: 16.1595
              },
              {
                attr_id: 322,
                value: 0
              },
              {
                attr_id: 323,
                value: 0.0539
              },
              {
                attr_id: 324,
                value: 4.536
              },
              {
                attr_id: 326,
                value: 0.1134
              },
              {
                attr_id: 328,
                value: 0.1134
              },
              {
                attr_id: 334,
                value: 0
              },
              {
                attr_id: 337,
                value: 0
              },
              {
                attr_id: 338,
                value: 0
              },
              {
                attr_id: 401,
                value: 0
              },
              {
                attr_id: 404,
                value: 0.0085
              },
              {
                attr_id: 405,
                value: 0.0802
              },
              {
                attr_id: 406,
                value: 0.0295
              },
              {
                attr_id: 410,
                value: 0.04
              },
              {
                attr_id: 415,
                value: 0.0105
              },
              {
                attr_id: 417,
                value: 1.9845
              },
              {
                attr_id: 418,
                value: 0.6464
              },
              {
                attr_id: 421,
                value: 4.3659
              },
              {
                attr_id: 429,
                value: 0
              },
              {
                attr_id: 430,
                value: 0.6521
              },
              {
                attr_id: 431,
                value: 0
              },
              {
                attr_id: 432,
                value: 1.9845
              },
              {
                attr_id: 435,
                value: 1.9845
              },
              {
                attr_id: 501,
                value: 0.146
              },
              {
                attr_id: 502,
                value: 0.2787
              },
              {
                attr_id: 503,
                value: 0.3218
              },
              {
                attr_id: 504,
                value: 0.5177
              },
              {
                attr_id: 505,
                value: 0.2736
              },
              {
                attr_id: 506,
                value: 0.146
              },
              {
                attr_id: 507,
                value: 0.0326
              },
              {
                attr_id: 508,
                value: 0.2866
              },
              {
                attr_id: 509,
                value: 0.2957
              },
              {
                attr_id: 510,
                value: 0.3748
              },
              {
                attr_id: 511,
                value: 0.146
              },
              {
                attr_id: 512,
                value: 0.146
              },
              {
                attr_id: 513,
                value: 0.2004
              },
              {
                attr_id: 514,
                value: 0.463
              },
              {
                attr_id: 515,
                value: 1.2638
              },
              {
                attr_id: 516,
                value: 0.146
              },
              {
                attr_id: 517,
                value: 0.6665
              },
              {
                attr_id: 518,
                value: 0.2084
              },
              {
                attr_id: 601,
                value: 22.3965
              },
              {
                attr_id: 606,
                value: 3.7286
              },
              {
                attr_id: 607,
                value: 0.2282
              },
              {
                attr_id: 608,
                value: 0.1264
              },
              {
                attr_id: 609,
                value: 0.0729
              },
              {
                attr_id: 610,
                value: 0.165
              },
              {
                attr_id: 611,
                value: 0.1956
              },
              {
                attr_id: 612,
                value: 0.6206
              },
              {
                attr_id: 613,
                value: 1.5113
              },
              {
                attr_id: 614,
                value: 0.6923
              },
              {
                attr_id: 617,
                value: 1.6015
              },
              {
                attr_id: 618,
                value: 0.1114
              },
              {
                attr_id: 619,
                value: 0.1055
              },
              {
                attr_id: 620,
                value: 0
              },
              {
                attr_id: 621,
                value: 0
              },
              {
                attr_id: 626,
                value: 0.1693
              },
              {
                attr_id: 627,
                value: 0
              },
              {
                attr_id: 628,
                value: 0
              },
              {
                attr_id: 629,
                value: 0
              },
              {
                attr_id: 630,
                value: 0
              },
              {
                attr_id: 631,
                value: 0
              },
              {
                attr_id: 645,
                value: 1.8635
              },
              {
                attr_id: 646,
                value: 0.2169
              }
            ],
            nix_brand_name: null,
            nix_brand_id: null,
            nix_item_name: null,
            nix_item_id: null,
            upc: null,
            consumed_at: "2019-10-29T06:17:05+00:00",
            metadata: {
              is_raw_food: false
            },
            source: 1,
            ndb_no: 1000531,
            tags: {
              item: "Cheese stick",
              measure: null,
              quantity: "1.0",
              food_group: 0,
              tag_id: 15080
            },
            alt_measures: [
              {
                serving_weight: 28.35,
                measure: "Stick",
                seq: 1,
                qty: 1
              },
              {
                serving_weight: 100,
                measure: "g",
                seq: null,
                qty: 100
              },
              {
                serving_weight: 28.3495,
                measure: "wt. oz",
                seq: null,
                qty: 1
              }
            ],
            lat: null,
            lng: null,
            meal_type: 5,
            photo: {
              thumb: "https://d2xdmhkmkbyw75.cloudfront.net/1150_thumb.jpg",
              highres: "https://d2xdmhkmkbyw75.cloudfront.net/1150_highres.jpg",
              is_user_uploaded: false
            },
            sub_recipe: null
          }
        ]
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.getSuggestions = this.getSuggestions.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.disableResult = this.disableResult.bind(this);
  }

  getSuggestions(value) {
    // when user input keywords, a suggestion list will be retrieved by sending following ajax reuquest
    if (value !== "") {
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
          } catch (error) {
            console.error(error);
          }
        }.bind(this) //this refers to class Autosuggests
      });
    }
  }
  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value, reason }) {
    clearTimeout(t);
    t = setTimeout(this.getSuggestions, 300, value);
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }
  onSuggestionSelected(
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) {
    // if (suggestionValue){this.setState(prevState => {displayResult: !prevState.displayResult})}
    $.ajax({
      url: "https://trackapi.nutritionix.com/v2/natural/nutrients",
      method: "POST",
      data: { query: suggestionValue },
      headers: {
        "x-app-id": "84de5f10",
        "x-app-key": "cd4754d56e0adf95486a6454261cb7d0",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(response, text, xhr) {
        try {
          this.setState({ result: xhr.responseJSON });
          this.setState({ displayResult: true });
          console.log(this.state.displayResult);
        } catch (error) {
          console.log(error);
        }
      }.bind(this)
    });
  }
  disableResult(foodAte) {
    this.setState({ displayResult: false });
    if (typeof foodAte === "object") {
      this.props.Foodhandler(foodAte);
    }
  }
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search food...",
      value,
      onChange: this.onChange
    };
    return (
      <Fragment>
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
          onSuggestionSelected={this.onSuggestionSelected}
          alwaysRenderSuggestions={true}
        />
        {this.state.displayResult === true ? (
          <SearchDetail
            nutrition={this.state.result}
            addHandler={this.disableResult}
          />
        ) : null}
      </Fragment>
    );
  }
}
