
setInterval(function(){
    document.getElementsByClassName('clock')[0].innerHTML = new Date().toLocaleTimeString();
}, 1000)