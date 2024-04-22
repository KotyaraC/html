let lastTouchTime = 0;

document.addEventListener('touchstart', function(event) {
    let currentTime = new Date().getTime();
    if (currentTime - lastTouchTime < 300) {
        event.preventDefault();
        event.stopPropagation();
        alert('Створення скріншотів заборонено на цьому сайті.');
    }
    lastTouchTime = currentTime;
}, false);

document.addEventListener('keydown', function(e) {
    if (e.key === 'PrintScreen' || (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86))) {
        e.preventDefault();
        e.stopPropagation();
        alert('Скріншоти заборонені на цьому сайті.');
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'PrintScreen' || (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86))) {
        e.preventDefault();
        e.stopPropagation();
        alert('Скріншоти заборонені на цьому сайті.');
    }
});

window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    e.stopPropagation();
    alert('Контекстне меню заборонене на цьому сайті.');
});
