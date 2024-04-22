document.addEventListener('keydown', function(e) {
    if (e.key === 'PrintScreen' || (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86))) {
        e.preventDefault();
        alert('Скриншоти заборонені на цьому сайті.');
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'PrintScreen' || (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86))) {
        e.preventDefault();
        alert('Скриншоти заборонені на цьому сайті.');
    }
});

window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Контекстне меню заборонене на цьому сайті.');
});

document.addEventListener('touchstart', function(e) {
    e.preventDefault();
    alert('Створення скріншотів заборонено на цьому сайті.');
});
