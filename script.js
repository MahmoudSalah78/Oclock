let digits = document.getElementById('Digits');

function Oclock(){
    let date = new Date();
    let currentTime = date.toLocaleTimeString();
    currentTime = currentTime.replace("ص", "am").replace("م", "pm");
    digits.innerHTML = currentTime;
}

setInterval(Oclock ,1000 );