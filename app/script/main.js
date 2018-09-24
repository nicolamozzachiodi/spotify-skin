function showMobileMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('closed');
    }
    else{
        mobileMenu.classList.remove('closed');
        mobileMenu.classList.add('active');
    }
}