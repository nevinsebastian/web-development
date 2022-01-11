let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc ==='images/firstim.jpg'){
        myImage.setAttribute('src','images/secim.jpg');
    }else{
        myImage.setAttribute('src','images/firstim.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('please eneter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'WELCOME,'+ myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'WELCOME'+ storedName;
}

myButton.onclick = function(){
    setUserName();
}