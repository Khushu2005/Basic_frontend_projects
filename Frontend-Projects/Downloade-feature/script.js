let btn = document.querySelector('button');
let p = document.querySelector('#col');
let per = document.querySelector('#percent')

let grow =0;
var value = Math.floor(Math.random()*100+50);

btn.addEventListener('click',function(){
    let int = setInterval(function(){
        grow++;
        per.innerHTML = grow+"%";
        col.style.width = grow+'%';
        



    },value)
 
    setTimeout(function(){
        clearInterval(int);
        
        btn.style.opacity=0.5;
        
    },value*100)

});
