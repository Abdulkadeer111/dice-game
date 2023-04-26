// first randomNumber generated

let randomNumber1 = Math.random() * 6;

randomNumber1 = Math.floor(Math.random() * 6) + 1;

// second randomNumber generated

let randomNumber2 = Math.random() * 6;

randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Concatenantion

let leftRandomImage = 'images/dice' + randomNumber1 + '.png';

let rightRandomImage = 'images/dice' + randomNumber2 + '.png';


// DOM manipution

document.querySelector(".img1").setAttribute('src', leftRandomImage);

document.querySelector(".img2").setAttribute('src', rightRandomImage);


// Control flow

if(leftRandomImage > rightRandomImage &&  rightRandomImage < leftRandomImage ){
    document.querySelector('h1').innerHTML = 'Player1 Win';
}else if(leftRandomImage === rightRandomImage ){
    document.querySelector('h1').innerHTML = 'Draws!';
}else{
    document.querySelector('h1').innerHTML = 'Player2 Win'
}