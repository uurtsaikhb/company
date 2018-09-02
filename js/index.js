(function() {
    let header = document.getElementById('header');
    window.onscroll = function(e) {
        if (window.scrollY > 0) {
            header.classList.add('shadow');
        }

        if (window.scrollY === 0) {
            header.classList.remove('shadow');
        }
    };
})();
