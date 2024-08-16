import { storage } from "./storage.js";
import { element } from "../elements.js";
import { createInput } from "../elements.js";




export let calc__broadcast = () => {
    storage.broadcast.splice(0, storage.broadcast.length);

    storage.broadcast = storage.netAdress.slice(0);

    storage.mask.map((item, index) => {

        if (item === "0" && storage.netAdress[index] === "0") {
            storage.broadcast.splice(index, 1, "1")
        }
    })

    let broadcastStr = parseInt(storage.broadcast.slice(0, 8).join(''), 2) + "." + parseInt(storage.broadcast.slice(8, 16).join(''), 2) + "." + parseInt(storage.broadcast.slice(16, 24).join(''), 2) + "." + parseInt(storage.broadcast.slice(24, 32).join(''), 2);
    element.broadcast.value = broadcastStr;
    let binaryFormat = createInput(storage.broadcast.slice(0, 8).join('') + "." + storage.broadcast.slice(8, 16).join('') + "." + storage.broadcast.slice(16, 24).join('') + "." + storage.broadcast.slice(24, 32).join(''))
    element.broadcast.after(binaryFormat)
    return
}

export let calc__broadcastA = () => {
    storage.broadcastA.splice(0, storage.broadcastA.length);

    storage.broadcastA = storage.netAdressA.slice(0);

    storage.subMask.map((item, index) => {

        if (item === "0" && storage.netAdressA[index] === "0") {
            storage.broadcastA.splice(index, 1, "1")
        }
    })

    let broadcastStrA = parseInt(storage.broadcastA.slice(0, 8).join(''), 2) + "." + parseInt(storage.broadcastA.slice(8, 16).join(''), 2) + "." + parseInt(storage.broadcastA.slice(16, 24).join(''), 2) + "." + parseInt(storage.broadcastA.slice(24, 32).join(''), 2);
    element.broadcastA.value = broadcastStrA;
    let binaryFormat = createInput(storage.broadcastA.slice(0, 8).join('') + "." + storage.broadcastA.slice(8, 16).join('') + "." + storage.broadcastA.slice(16, 24).join('') + "." + storage.broadcastA.slice(24, 32).join(''))
    element.broadcastA.after(binaryFormat)

    return
}

export let calc__broadcastB = () => {
    storage.broadcastB.splice(0, storage.broadcastB.length);

    storage.broadcastB = storage.netAdressB.slice(0);

    storage.subMask.map((item, index) => {

        if (item === "0" && storage.netAdressB[index] === "0") {
            storage.broadcastB.splice(index, 1, "1")
        }
    })

    let broadcastStrB = parseInt(storage.broadcastB.slice(0, 8).join(''), 2) + "." + parseInt(storage.broadcastB.slice(8, 16).join(''), 2) + "." + parseInt(storage.broadcastB.slice(16, 24).join(''), 2) + "." + parseInt(storage.broadcastB.slice(24, 32).join(''), 2);
    element.broadcastB.value = broadcastStrB;
    let binaryFormat = createInput(storage.broadcastB.slice(0, 8).join('') + "." + storage.broadcastB.slice(8, 16).join('') + "." + storage.broadcastB.slice(16, 24).join('') + "." + storage.broadcastB.slice(24, 32).join(''))
    element.broadcastB.after(binaryFormat)

    return 
}

