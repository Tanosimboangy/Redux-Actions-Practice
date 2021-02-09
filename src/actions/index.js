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

// export function setSpecialText(texts){
//   return {
//     type: "SPECIAL_TEXT",
//     payload: texts
//   }
// }
export function setSpecialText(){
  return {
    type: "",
    value: ","
  }
}