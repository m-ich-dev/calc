export let input = {
    adress: document.querySelectorAll('.calc__input'),
    mask: document.getElementById('5'),
    result: document.querySelectorAll('.calc__inputresult'),
}



Array.from(input.adress).forEach(octet => {

    octet.style.width = ((octet.value.length + 2) * 9) + 'px'

    input.mask.style.width = ((input.mask.value.length + 2) * 9) + 'px'

    octet.addEventListener('keydown', function () {
        this.style.width = ((this.value.length + 2) * 9) + 'px'
        if (Number(this.value) > 255) {
            setTimeout(() => {
                this.style.width = ((this.value.length + 2) * 9) + 'px'
                this.value = 255
            }, 500);

        } else if (Number(this.value) < 0) {
            setTimeout(() => {
                this.style.width = ((this.value.length + 2) * 9) + 'px'
                this.value = ""
            }, 500);
        }
    });

    octet.addEventListener('keyup', function () {
        this.style.width = ((this.value.length + 2) * 9) + 'px'
        if (Number(this.value) > 255) {
            setTimeout(() => {
                this.style.width = ((this.value.length + 2) * 9) + 'px'
                this.value = 255
            }, 500);
        } else if (Number(this.value) < 0) {
            setTimeout(() => {
                this.style.width = ((this.value.length + 2) * 9) + 'px'
                this.value = ""
            }, 500);
        }
    });


});

input.mask.addEventListener('keydown', function () {
    input.mask.style.width = ((input.mask.value.length + 2) * 9) + 'px'
    if (Number(this.value) > 32) {
        setTimeout(() => {
            input.mask.style.width = ((input.mask.value.length + 2) * 9) + 'px'
            this.value = 32
        }, 500);

    } else if (Number(this.value) < 0) {
        setTimeout(() => {
            input.mask.style.width = ((input.mask.value.length + 2) * 9) + 'px'
            this.value = ""
        }, 500);
    }
});

input.mask.addEventListener('keyup', function () {
    input.mask.style.width = ((input.mask.value.length + 2) * 9) + 'px'
    if (Number(this.value) > 32) {
        setTimeout(() => {
            this.value = 32
        }, 500);
    } else if (Number(this.value) < 0) {
        setTimeout(() => {
            this.value = ""
        }, 500);
    }
});