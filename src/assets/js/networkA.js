import { calc__netadressA as netAdressA } from "./modules/netadress.js";
import { calc__broadcastA as broadCastA } from "./modules/broadcast.js";
import { calc__firsthostA as firstHostA } from "./modules/firsthost.js";
import { calc__lasthostA as lastHostA } from "./modules/lasthost.js";




export function networkA() {

    netAdressA();
    broadCastA();
    firstHostA();
    lastHostA();

}
