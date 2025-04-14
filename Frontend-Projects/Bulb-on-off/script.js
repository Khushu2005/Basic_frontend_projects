let b = document.querySelector('#container');
let btn = document.querySelector('button');
let flag = 0;
btn.addEventListener('click', function () {
    if (flag == 0) {
        b.style.backgroundColor = 'yellow';
        btn.innerHTML = 'Turn off';
        flag = 1;
    }
    else {
        b.style.backgroundColor = 'transparent';
        btn.innerHTML = 'Turn on';
        flag = 0;
    }
});