document.addEventListener('keydown', function(e) {
    if (e.key == 'PrintScreen'  (e.ctrlKey && (e.keyCode == 67 || e.keyCode == 86))) {
      e.preventDefault();
      alert('Скриншоты запрещены на этом сайте.');
    }
  });