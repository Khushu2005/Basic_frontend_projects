let liked = document.querySelector("#liked");
let show = document.querySelector('#love')
let img = document.querySelector('#main_img');
liked.addEventListener('click', function () {
    show.style.transform = ' translate(-50%,-50%) scale(0.3)';
    show.style.opacity = 0.8;
    liked.style.color = "red";

    setTimeout(function () {
        show.style.opacity = 0;



    }, 2000)
    setTimeout(function () {

        show.style.transform = ' translate(-50%,-50%) scale(0)';
    }, 3000)



})
img.addEventListener('dblclick', function () {
    show.style.transform = ' translate(-50%,-50%) scale(0.3)';
    show.style.opacity = 0.8;
    setTimeout(function () {
        show.style.opacity = 0;



    }, 2000)
    setTimeout(function () {

        show.style.transform = ' translate(-50%,-50%) scale(0)';
    }, 3000)

})