import { storage } from "./storage.js";
import { element } from "../elements.js";
import { createInput } from "../elements.js";



export let calc__hostadress = () => {

  storage.hostAdress.splice(0, storage.hostAdress.length)

  storage.mask.map((item) => {
    item == "1" ? storage.maskReverse.push("0") : storage.maskReverse.push("1")
  })

  storage.maskReverse.map((item, index) => {
    (item === "1" && storage.adress[index] === "1") ? storage.hostAdress.push("1") : storage.hostAdress.push("0")
  })

  let hostAdressStr = parseInt(storage.hostAdress.slice(0, 8).join(''), 2) + "." + parseInt(storage.hostAdress.slice(8, 16).join(''), 2) + "." + parseInt(storage.hostAdress.slice(16, 24).join(''), 2) + "." + parseInt(storage.hostAdress.slice(24, 32).join(''), 2);
  element.hostAdress.value = hostAdressStr
  let binaryFormat = createInput(storage.hostAdress.slice(0, 8).join('') + "." + storage.hostAdress.slice(8, 16).join('') + "." + storage.hostAdress.slice(16, 24).join('') + "." + storage.hostAdress.slice(24, 32).join(''));
  element.hostAdress.after(binaryFormat)
  return

};