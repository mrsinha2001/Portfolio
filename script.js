document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    this.textContent = document.body.classList.contains('light-theme') ? '🌙' : '☀';
});