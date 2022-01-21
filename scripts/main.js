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
let myHeading = document.querySelector('h2');

function setUserName(){
    let myName = prompt('please eneter your name.');
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent = 'HEY,'+ myName;
    }
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

document.querySelector('html').clientWidth