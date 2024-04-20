let digits = document.getElementById('Digits');

// انتظر 3 ثواني ثم قم بإخفاء عنصر الـ loading
setTimeout(function() {
    document.querySelector('.bord').style.opacity = '0';
  }, 4000);
  
function Oclock(){
    let date = new Date();
    let currentTime = date.toLocaleTimeString();
    currentTime = currentTime.replace("ص", "am").replace("م", "pm");
    digits.innerHTML = currentTime;
}

setInterval(Oclock ,1000 );
