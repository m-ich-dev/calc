import { calc__adress as adress } from "./modules/adress.js";
import { calc__mask as mask } from "./modules/mask.js";
import { calc__submask as subMask } from "./modules/mask.js";
import { calc__hostcount as hostCount } from "./modules/hostcount.js";
import { calc__netadress as netAdress } from "./modules/netadress.js";
import { calc__netclass as netClass } from "./modules/netclass.js";
import { calc__hostadress as hostAdress } from "./modules/hostadress.js";
import { calc__broadcast as broadCast } from "./modules/broadcast.js";
import { calc__firsthost as firstHost } from "./modules/firsthost.js";
import { calc__lasthost as lastHost } from "./modules/lasthost.js";

export function network() {

    mask();
    adress()
    netClass();
    netAdress();
    hostCount();
    hostAdress();
    broadCast();
    firstHost();
    lastHost();

    subMask();

}