import { storage } from "./storage.js";
import { element } from "../elements.js";
import { createInput } from "../elements.js";
import { input } from "../input.js";

export const mask = document.getElementById('5');


export let calc__mask = () => {

    storage.mask.splice(0, storage.mask.length)


    for (let i = 0; i < mask.value; i++) {
        storage.mask.push("1")
    };

    while (storage.mask.length != 32) {
        storage.mask.push("0")
    }
    let maskStr = parseInt(storage.mask.slice(0, 8).join(''), 2) + "." + parseInt(storage.mask.slice(8, 16).join(''), 2) + "." + parseInt(storage.mask.slice(16, 24).join(''), 2) + "." + parseInt(storage.mask.slice(24, 32).join(''), 2);
    element.mask.value = maskStr
    let binaryFormat = createInput(storage.mask.slice(0, 8).join('') + "." + storage.mask.slice(8, 16).join('') + "." + storage.mask.slice(16, 24).join('') + "." + storage.mask.slice(24, 32).join(''));
    element.mask.after(binaryFormat)
    return

};


export let calc__submask = () => {

    storage.subMask.splice(0, storage.subMask.length)
    let maskStr
    
    if (Number(input.mask.value) < 32) {
        for (let i = -1; i < mask.value; i++) {
            storage.subMask.push("1")
        };

        while (storage.subMask.length != 32) {
            storage.subMask.push("0")
        }
        maskStr = parseInt(storage.subMask.slice(0, 8).join(''), 2) + "." + parseInt(storage.subMask.slice(8, 16).join(''), 2) + "." + parseInt(storage.subMask.slice(16, 24).join(''), 2) + "." + parseInt(storage.subMask.slice(24, 32).join(''), 2);

        let binaryFormat = createInput(storage.subMask.slice(0, 8).join('') + "." + storage.subMask.slice(8, 16).join('') + "." + storage.subMask.slice(16, 24).join('') + "." + storage.subMask.slice(24, 32).join(''))
        element.subMask.after(binaryFormat)
    } else {

        storage.subMask.splice(0, storage.subMask.length)
        maskStr = ''
    }
    element.subMask.value = maskStr



    return

}