import { storage } from "./storage.js";
import { element } from "../elements.js";
import { mask } from "./mask.js";
import { createInput } from "../elements.js";

export let calc__lasthost = () => {

    if (Number(mask.value) > 30) {
        element.lastHost.value = "0"
    } else {
        element.lastHost.value = parseInt(storage.broadcast.slice(0, 8).join(''), 2) + "." + parseInt(storage.broadcast.slice(8, 16).join(''), 2) + "." + parseInt(storage.broadcast.slice(16, 24).join(''), 2) + "." + (parseInt(storage.broadcast.slice(24, 32).join(''), 2) - 1);
    }
    let binaryFormat = createInput(storage.broadcast.slice(0, 8).join('') + "." + storage.broadcast.slice(8, 16).join('') + "." + storage.broadcast.slice(16, 24).join('') + "." + (parseInt(storage.broadcast.slice(24, 32).join(''), 2) - 1).toString(2).padStart(8, "0"))
    element.lastHost.after(binaryFormat)
    return
}

export let calc__lasthostA = () => {

    if (Number(mask.value) > 29) {
        element.lastHostA.value = "0"
    } else {
        element.lastHostA.value = parseInt(storage.broadcastA.slice(0, 8).join(''), 2) + "." + parseInt(storage.broadcastA.slice(8, 16).join(''), 2) + "." + parseInt(storage.broadcastA.slice(16, 24).join(''), 2) + "." + (parseInt(storage.broadcastA.slice(24, 32).join(''), 2) - 1);
    }
    let binaryFormat = createInput(storage.broadcastA.slice(0, 8).join('') + "." + storage.broadcastA.slice(8, 16).join('') + "." + storage.broadcastA.slice(16, 24).join('') + "." + (parseInt(storage.broadcastA.slice(24, 32).join(''), 2) - 1).toString(2).padStart(8, "0"))
    element.lastHostA.after(binaryFormat)
    return
}

export let calc__lasthostB = () => {

    if (Number(mask.value) > 29) {
        element.lastHostB.value = "0"
    } else {
        element.lastHostB.value = parseInt(storage.broadcastB.slice(0, 8).join(''), 2) + "." + parseInt(storage.broadcastB.slice(8, 16).join(''), 2) + "." + parseInt(storage.broadcastB.slice(16, 24).join(''), 2) + "." + (parseInt(storage.broadcastB.slice(24, 32).join(''), 2) - 1);
    }
    let binaryFormat = createInput(storage.broadcastB.slice(0, 8).join('') + "." + storage.broadcastB.slice(8, 16).join('') + "." + storage.broadcastB.slice(16, 24).join('') + "." + (parseInt(storage.broadcastB.slice(24, 32).join(''), 2) - 1).toString(2).padStart(8, "0"))
    element.lastHostB.after(binaryFormat)
    return
}