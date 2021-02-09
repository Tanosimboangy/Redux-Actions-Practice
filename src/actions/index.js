// function that returns an action type and a text value
export function increase() {
  return {
    type: 'INCREASE',
  }
}
export function decrease() {
  return {
    type: 'DECREASE',
  }
}
export function setSpecialText(texts){
  return {
    type: "SPECIAL_TEXT",
    value: texts
  }
}
export function searchUserByFirstName(firstName) {
  return {
    type: "SEARCH_USER_BY_FISRTNAME",
    value: firstName
  }
}
export function sortUsers(currentUserSort) {
  return {
    type: "CURRENT_USER_SORT",
    value: currentUserSort,
  }
}
export function currentTemp(temperature) {
  return {
    type: "SET_CURRENT_TEMP",
    value: temperature,
  }
}