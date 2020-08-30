document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('mode') == 'dark-mode') {
        document.body.classList.toggle('dark-mode');    
    }
    
});

function darkMode() {
    document.body.classList.toggle('dark-mode');

    if (document.body.className == 'light-mode dark-mode') {
        document.getElementById('mode').innerText = 'Light Mode';
        localStorage.setItem('mode', 'dark-mode');

    }
    else {
        document.getElementById('mode').innerText = 'Dark Mode';
        localStorage.setItem('mode', 'light-mode');
    }
}
