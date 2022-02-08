const allButton = document.getElementsByClassName("button-test");
console.log(allButton);

// for (const button of allButton) {
//     button.addEventListener('click', function (event) {
//         console.log(event.target.parentNode);
//         if (event.target.id == 'prime') {
//             document.getElementById('count').style.color = 'red';

//         } else {
//             document.getElementById("title").style.color = 'green';
//         }
//     })
// }

let count = 0;

function add(e) {
    count++;
    control("count")
}
function minus(e) {
    count--;
    control("count")
}

function control(id) {
    document.getElementById(id).innerText = count;
}