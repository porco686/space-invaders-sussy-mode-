let time = 5;
setInterval(() => {
    document.getElementById('time').textContent=time-1+' Seconds';
    time = time -1;
}, 1000);

setInterval(() => {
    window.location.replace('http://127.0.0.1:5500/private/index.html');
}, 5000)