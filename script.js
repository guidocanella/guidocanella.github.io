const root = document.documentElement;

document.addEventListener('mousemove', evt => {
    let x = evt.clientX / window.innerWidth;
    let y = evt.clientY / window.innerHeight;

    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});

document.addEventListener("DOMContentLoaded", function () {
    let floor = wall.cloneNode(true);
    floor.id = 'floor';
    floor.classList.add('floor');
    document.body.append(floor);
    let floorTexts = floor.querySelectorAll('.wall-text');
    for (let floorText of floorTexts) {
        floorText.classList.add('floor-text');
        setCenterCoords(floorText);
    }
});

function setCenterCoords(elem) {
    let rect = elem.getBoundingClientRect();
    let centerX = (rect.right + rect.left) / (2 * window.innerWidth);
    let centerY = (rect.bottom + rect.top) / (2 * window.innerHeight) ;
    elem.style.setProperty('--elem-x', centerX);
    elem.style.setProperty('--elem-y', centerY);
}

/*

on document load:
per ogni elem di wall con classe wall-text:
    lo clono in floor
    gli do uno stile floor-text:
        color transparent
        custom var con le coordinate dell'elem calcolate da js
        text-shadow basato sulle custom var



*/