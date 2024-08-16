import { element } from "../elements.js";
import { input } from "../input.js";



export let calc__netclass = () => {

  if (1 <= Number(input.adress[0].value) && Number(input.adress[0].value) <= 126) {
    element.netClass.value = "A"
  } else if (128 <= Number(input.adress[0].value) && Number(input.adress[0].value) <= 191) {
    element.netClass.value = "B"
  } else if (192 <= Number(input.adress[0].value) && Number(input.adress[0].value) <= 223) {
    element.netClass.value = "C"
  } else if (224 <= Number(input.adress[0].value) && Number(input.adress[0].value) <= 239) {
    element.netClass.value = "D"
  } else if (240 <= Number(input.adress[0].value) && Number(input.adress[0].value) <= 255) {
    element.netClass.value = "E"
  }
  else {
    element.netClass.value = "-"
  }
  return element.netClass.value


}