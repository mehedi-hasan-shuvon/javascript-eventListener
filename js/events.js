function makeRed() {
    document.body.style.backgroundColor = 'red';
}


//handle blue button click by setting function name
const bluebutton = document.getElementById('blue-button');
bluebutton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//handeling green button with annonymous function
const greenbutton = document.getElementById("green-button");

greenbutton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}


//handeling by using add event listener
const goldenrodbutton = document.getElementById('goldenrod-button');
goldenrodbutton.addEventListener('click', makegoldenrod);
function makegoldenrod() {
    document.body.style.backgroundColor = "goldenRod";
}

//another way with annyymoys function with eventlistner

const hotpinkbutton = document.getElementById("hotpink-button");
hotpinkbutton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

//with one line with add event listener
document.getElementById('lightblue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = "lightblue";
})