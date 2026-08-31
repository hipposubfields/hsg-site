document.addEventListener('DOMContentLoaded', function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  var icon = document.getElementById('themeIcon');
  var label = document.getElementById('themeLabel');

  function sync() {
    var isDark = root.getAttribute('data-theme') === 'dark';
    icon.innerHTML = isDark ? '&#9788;' : '&#9789;';
    label.textContent = isDark ? 'Light' : 'Dark';
  }

  btn.addEventListener('click', function () {
    var isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.setItem('hsg-theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('hsg-theme', 'dark');
    }
    sync();
  });

  sync();
});
