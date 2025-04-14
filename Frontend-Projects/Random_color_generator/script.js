let b = document.querySelector('#container');
let btn = document.querySelector('button');
let colr = document.querySelector('#code');

btn.addEventListener('click', function () {

    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    let r = `rgb(${c1},${c2},${c3})`;
    b.style.backgroundColor = r;

    b.style.borderColor = `${r}`;

    let hex = rgbToHex(c1, c2, c3);
    colr.innerHTML = `HEX-CODE:  ${hex}`;


});
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
}
