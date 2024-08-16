import { mask } from "./mask.js";
import { element } from "../elements.js";
//const hostcount__input = document.getElementById('11');


export let calc__hostcount = () => {

  if (Number(mask.value) > 30) {
    element.hostCount.value = "0"
  } else {
    element.hostCount.value = (2 ** (32 - mask.value)) - 2;
  }
  return element.hostCount.value;

};