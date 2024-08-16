import { storage } from "./storage.js";
import { element } from "../elements.js";
import { mask } from "./mask.js";
import { createInput } from "../elements.js";


export let calc__firsthost = () => {

  if (Number(mask.value) > 30) {
    element.firstHost.value = "0"
  } else {
    element.firstHost.value = parseInt(storage.netAdress.slice(0, 8).join(''), 2) + "." + parseInt(storage.netAdress.slice(8, 16).join(''), 2) + "." + parseInt(storage.netAdress.slice(16, 24).join(''), 2) + "." + (parseInt(storage.netAdress.slice(24, 32).join(''), 2) + 1);
  }

  let binaryFormat = createInput(storage.netAdress.slice(0, 8).join('') + "." + storage.netAdress.slice(8, 16).join('') + "." + storage.netAdress.slice(16, 24).join('') + "." + ((parseInt(storage.netAdress.slice(24, 32).join(''), 2) + 1)).toString(2).padStart(8, "0"));
  element.firstHost.after(binaryFormat)
  return

}

export let calc__firsthostA = () => {

  if (Number(mask.value) > 29) {
    element.firstHostA.value = "0"
  } else {
    element.firstHostA.value = parseInt(storage.netAdressA.slice(0, 8).join(''), 2) + "." + parseInt(storage.netAdressA.slice(8, 16).join(''), 2) + "." + parseInt(storage.netAdressA.slice(16, 24).join(''), 2) + "." + (parseInt(storage.netAdressA.slice(24, 32).join(''), 2) + 1);
  }
  let binaryFormat = createInput(storage.netAdressA.slice(0, 8).join('') + "." + storage.netAdressA.slice(8, 16).join('') + "." + storage.netAdressA.slice(16, 24).join('') + "." + ((parseInt(storage.netAdressA.slice(24, 32).join(''), 2) + 1)).toString(2).padStart(8, "0"));
  element.firstHostA.after(binaryFormat)
  return

}

export let calc__firsthostB = () => {

  if (Number(mask.value) > 29) {
    element.firstHostB.value = "0"
  } else {
    element.firstHostB.value = parseInt(storage.netAdressB.slice(0, 8).join(''), 2) + "." + parseInt(storage.netAdressB.slice(8, 16).join(''), 2) + "." + parseInt(storage.netAdressB.slice(16, 24).join(''), 2) + "." + (parseInt(storage.netAdressB.slice(24, 32).join(''), 2) + 1);
  }
  let binaryFormat = createInput(storage.netAdressB.slice(0, 8).join('') + "." + storage.netAdressB.slice(8, 16).join('') + "." + storage.netAdressB.slice(16, 24).join('') + "." + ((parseInt(storage.netAdressB.slice(24, 32).join(''), 2) + 1)).toString(2).padStart(8, "0"));
  element.firstHostB.after(binaryFormat)
  return

}