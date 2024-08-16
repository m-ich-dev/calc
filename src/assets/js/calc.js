import { input } from "./input.js";
import { button } from "./buttons.js";
import { network } from "./network.js";
import { networkA } from "./networkA.js";
import { networkB } from "./networkB.js";





export function calc() {
    button.result.addEventListener('click', function (e) {
        e.preventDefault();

        if (document.querySelector('.calc__inputresult--binary')) {
            Array.from(document.querySelectorAll('.calc__inputresult--binary')).forEach(input => {
                input.remove();
            })

        }

        network();
        if (Number(input.mask.value) < 32) {

            document.getElementById('calc_subnetworks').classList.remove('calc__subnetworks--hidden');
            networkA();
            networkB();

        } else {
            document.getElementById('calc_subnetworks').classList.add('calc__subnetworks--hidden');
        }

        Array.from(input.result).forEach(input => {

            input.style.width = ((input.value.length + 2) * 9) + 'px'


        });


    })
}
