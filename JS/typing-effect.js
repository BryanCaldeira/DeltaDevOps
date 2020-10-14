var i = 0;
var txt = 'Think,Innovate and Create!';
var speed = 150;

function Moto() {
    if (i < txt.length) {
        document.getElementById("moto").innerHTML += txt.charAt(i);
        i++;
        setTimeout(Moto, speed);
    }
}