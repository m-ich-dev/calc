export let element = {
    mask: document.getElementById('mask'),
    subMask: document.getElementById('subMask'),

    adress: document.getElementById('adress'),
    hostAdress: document.getElementById('hostAdress'),
    hostCount: document.getElementById('hostCount'),

    netAdress: document.getElementById('netAdress'),
    netAdressA: document.getElementById('netAdressA'),
    netAdressB: document.getElementById('netAdressB'),

    netClass: document.getElementById('netClass'),

    broadcast: document.getElementById('broadcast'),
    broadcastA: document.getElementById('broadcastA'),
    broadcastB: document.getElementById('broadcastB'),

    firstHost: document.getElementById('firstHost'),
    firstHostA: document.getElementById('firstHostA'),
    firstHostB: document.getElementById('firstHostB'),

    lastHost: document.getElementById('lastHost'),
    lastHostA: document.getElementById('lastHostA'),
    lastHostB: document.getElementById('lastHostB'),

}

export function createInput(innerText) {
    let binaryInput = document.createElement('div')
   
    binaryInput.className = "calc__inputresult calc__inputresult--binary"
    binaryInput.innerText = innerText

    return binaryInput
}

