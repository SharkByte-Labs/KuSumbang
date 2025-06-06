const currentPath = window.location.pathname;
let layoutPath = '';

if (currentPath.includes('/src/pages/')) {
    layoutPath = '../../layout/';
} else {
    layoutPath = 'src/layout/';
}

fetch(`${layoutPath}navbar.html`)
    .then(res => res.text())
    .then(data => (document.getElementById('navbar').innerHTML = data));

fetch(`${layoutPath}footer.html`)
    .then(res => res.text())
    .then(data => (document.getElementById('footer').innerHTML = data));

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 10) {
        navbar.classList.add('bg-white', 'pt-4','pb-1');
    } else {
        navbar.classList.remove('bg-white', 'pt-4','pb-1');

    }
});

