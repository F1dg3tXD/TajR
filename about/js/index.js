document.getElementById('navToggle').addEventListener('click', function() {
    var sideNav = document.getElementById('sideNav');
    var navToggle = document.getElementById('navToggle');
    if (sideNav.classList.contains('active')) {
        sideNav.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.style.left = '20px';
    } else {
        sideNav.classList.add('active');
        navToggle.classList.add('active');
        navToggle.style.left = '270px'; // 250px (sideNav width) + 20px (margin)
    }
});
