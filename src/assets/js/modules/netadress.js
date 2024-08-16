import { storage } from "./storage.js";
import { element } from "../elements.js";
import { mask } from "./mask.js";
import { createInput } from "../elements.js";
//https://skillbox.ru/media/code/chto-takoe-ipadres-i-maska-podseti-i-zachem-oni-nuzhny/




export let calc__netadress = () => {

    storage.netAdress.splice(0, storage.netAdress.length)

    storage.mask.map((item, index) => {
        (item === "1" && storage.adress[index] === "1") ? storage.netAdress.push("1") : storage.netAdress.push("0")
    })


    let netAdressStr = parseInt(storage.netAdress.slice(0, 8).join(''), 2) + "." + parseInt(storage.netAdress.slice(8, 16).join(''), 2) + "." + parseInt(storage.netAdress.slice(16, 24).join(''), 2) + "." + parseInt(storage.netAdress.slice(24, 32).join(''), 2);
    element.netAdress.value = netAdressStr;
    let binaryFormat = createInput(storage.netAdress.slice(0, 8).join('') + "." + storage.netAdress.slice(8, 16).join('') + "." + storage.netAdress.slice(16, 24).join('') + "." + storage.netAdress.slice(24, 32).join(''));
    element.netAdress.after(binaryFormat)
    return

}

export let calc__netadressA = () => {

    storage.netAdressA.splice(0, storage.netAdressA.length);

    storage.netAdressA = storage.netAdress.slice(0);
    let splice = Number(mask.value) + 1
    storage.netAdressA.splice(splice, 1, "0");

    let netAdressStrA = parseInt(storage.netAdressA.slice(0, 8).join(''), 2) + "." + parseInt(storage.netAdressA.slice(8, 16).join(''), 2) + "." + parseInt(storage.netAdressA.slice(16, 24).join(''), 2) + "." + parseInt(storage.netAdressA.slice(24, 32).join(''), 2);
    element.netAdressA.value = netAdressStrA;

    let binaryFormat = createInput(storage.netAdressA.slice(0, 8).join('') + "." + storage.netAdressA.slice(8, 16).join('') + "." + storage.netAdressA.slice(16, 24).join('') + "." + storage.netAdressA.slice(24, 32).join(''));
    element.netAdressA.after(binaryFormat)
    return


}

export let calc__netadressB = () => {

    storage.netAdressB.splice(0, storage.netAdressB.length);

    storage.netAdressB = storage.netAdress.slice(0);
    let splice = Number(mask.value)
    storage.netAdressB.splice(splice, 1, "1");

    let netAdressStrB = parseInt(storage.netAdressB.slice(0, 8).join(''), 2) + "." + parseInt(storage.netAdressB.slice(8, 16).join(''), 2) + "." + parseInt(storage.netAdressB.slice(16, 24).join(''), 2) + "." + parseInt(storage.netAdressB.slice(24, 32).join(''), 2);
    element.netAdressB.value = netAdressStrB;
    let binaryFormat = createInput(storage.netAdressB.slice(0,8).join('') + "." + storage.netAdressB.slice(8,16).join('') + "." + storage.netAdressB.slice(16,24).join('') + "." + storage.netAdressB.slice(24,32).join(''));
    element.netAdressB.after(binaryFormat)
    return 

}