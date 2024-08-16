import { storage } from "./storage.js";
import { element } from "../elements.js";
import { input } from "../input.js";
import { createInput } from "../elements.js";






export let calc__adress = () => {

    storage.adress.splice(0, storage.adress.length)


    storage.adress = (Number(input.adress[0].value).toString(2).padStart(8, "0") + Number(input.adress[1].value).toString(2).padStart(8, "0") + Number(input.adress[2].value).toString(2).padStart(8, "0") + Number(input.adress[3].value).toString(2).padStart(8, "0")).split('');

    let adressStr = parseInt(storage.adress.slice(0, 8).join(''), 2) + "." + parseInt(storage.adress.slice(8, 16).join(''), 2) + "." + parseInt(storage.adress.slice(16, 24).join(''), 2) + "." + parseInt(storage.adress.slice(24, 32).join(''), 2)
    element.adress.value = adressStr
    let binaryFormat = createInput(storage.adress.slice(0, 8).join('') + "." + storage.adress.slice(8, 16).join('') + "." + storage.adress.slice(16, 24).join('') + "." + storage.adress.slice(24, 32).join(''))
    element.adress.after(binaryFormat);
    return

}    
