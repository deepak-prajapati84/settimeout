function f1(){
    document.querySelector('.loader').style.display='none';
}

setTimeout(f2,2000);
setTimeout(f3,3000);
setTimeout(f4,4000)

function f2(){
    document.querySelector('num').innerHTML='2';
}

function f3(){
    document.querySelector("num").innerHTML='3';
}

function f4(){
    document.querySelector("num").innerHTML='4';
}