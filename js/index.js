// Your code goes here

let navTag = document.querySelectorAll('.nav-link');
navTag.forEach((element, i) => {
    navTag[i].addEventListener('click', (cb => {
        alert('You clicked the nav tag!');
    }));
})

let welcome = document.querySelector('h2');
welcome.addEventListener('mouseover', (cb => {
    welcome.style.color = "green";
}));

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let body = document.querySelector('body');
document.addEventListener('scroll', (cb => {
    body.style.backgroundColor = getRandomColor();
}));

let destination = document.querySelector('h4');
window.addEventListener('focus', (cb => {
    destination.style.background = 'red';
}));

let content = document.querySelector('.text-content h2');
document.addEventListener('dblclick', function(){
    alert("I was clicked!");
});

