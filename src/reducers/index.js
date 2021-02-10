import { combineReducers } from "redux";

// incomplete reducer function that checks an action prop type to detemine a counter number
function currentCount(count = 0, action){
  switch(action.type) {
    case "INCREASE" :
      return count + 1;
    case "DECREASE" :
      return count - 1;
    default: 
      return count;
  }
}

// complete reducer function that should check action prop type ""SET_SPECIAL_TEXT" to determine state value
function specialText(text = "", action){
  switch(action.type) {
    case "SPECIAL_TEXT":
      return action.value;
    default:
      return text;
  }
}

// incomplete reducer function that should check an action prop type to return an array of users
function users(state =[], action){
  switch (action.type) {
    // case "SEARCH_USER_BY_FIRSTNAME":
    default:
      return state;
  }
}

function currentCity(state="", action){
  switch(action.type) {
    case "SET_CURRENT_CITY":{
      return action.value
    }
    default:
      return state;
  }
}

function currentTemp(state = 0, action){
  switch (action.type) {
    case "SET_CURRENT_TEMP":
      return action.value
    default:
      return state
  }
}

function displayModal(state=false){
  return state;
}

function imageUrl(state=""){
  return state
}

function currentUserSort(state="first_name", action){
  switch (action.type) {
    case "CURRENT_USER_SORT":
      return action.value;
    default:
      return state;
  }
}

function imageScale(state=1){
  return state
}

function searchText(state="", action) {
  switch (action.type) {
    case "SEARCH_USER_BY_FIRSTNAME":
      return action.value;
    default:
      return state;
  }
}

export default combineReducers({
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  displayModal,
  imageUrl,
  currentUserSort,
  imageScale,
  users
});
