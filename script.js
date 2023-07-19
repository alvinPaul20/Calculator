
console.log("🚀 ~ file: script.js:2 ~ display:", display)
let num = document.getElementsByClassName('num');


for(let i = 0 ; i< num.length; i++){
    num[i].onclick = function(){
        document.getElementById('display').value +=num[i].innerHTML
}

}
function C(){
    document.getElementById('display').value ="";
}
function del(){
   let a = document.getElementById('display').value;
   document.getElementById('display').value = a.slice(0,a.length-1);
}

function equal(){
    let a = document.getElementById('display').value;
    document.getElementById('display').value = eval(a);
}
function percent(){
    let b =document.getElementById('display').value;
    document.getElementById('display').value = b/100;
}