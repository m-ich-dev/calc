import { calc__netadressB as netAdressB } from "./modules/netadress.js";
import { calc__broadcastB as broadCastB } from "./modules/broadcast.js";
import { calc__firsthostB as firstHostB } from "./modules/firsthost.js";
import { calc__lasthostB as lastHostB } from "./modules/lasthost.js";

export function networkB (){

    netAdressB();
    broadCastB();
    firstHostB();
    lastHostB();
    
}