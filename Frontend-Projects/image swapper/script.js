// var btn = document.querySelector('button');
// var body = document.querySelector('body');
// btn.addEventListener('click', function() { 

// var img = document.createElement('img');
//     img.setAttribute('src','https://images.unsplash.com/photo-1739104545868-e66836138d6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvcmVhbW9ufGVufDB8fDB8fHww');

//     var x = Math.random()*(window.innerWidth - 150);
//     var y = Math.random()*(window.innerWidth - 150);
//     // var rot = Math.random()*360;

  
//     // img.style.width ="100px";
//     img.style.height ="100px";
//     img.style.position ="absolute";
//     img.style.top = y + '%';
//     img.style.left = x + '%';
//     // img.style.rotate = rot + 'deg';

//     body.appendChild(img);
// });


var btn = document.querySelector('button');
var body = document.querySelector('body');

btn.addEventListener('mouseover', function () {

    var img = document.createElement('img');
    img.setAttribute('src', './doreamon.png');


    var x = Math.random() * (window.innerWidth - 100);
    var y = Math.random() * (window.innerHeight - 100);

    img.style.width = "100px";
    img.style.height = "100px";
    img.style.position = "absolute";
    img.style.left = x + 'px';   
    img.style.top = y + 'px';  
    img.style.zIndex = "0"; 
    
    body.appendChild(img);
});
