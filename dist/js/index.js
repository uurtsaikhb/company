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

    document
        .getElementById('menu-bar-wrapper')
        .addEventListener('click', toggleNavigation);

    function toggleNavigation() {
        const navBarModal = document.getElementById('navbar-modal');
        navBarModal.classList.add('open');
        navBarModal.style.top = window.screenY - 22 + 'px';

        document.body.classList.add('modal-open');
    }

    document
        .getElementById('navbar-modal')
        .addEventListener('click', function(e) {
            if (e.target.tagName === 'LI') {
                this.classList.remove('open');
                document.body.classList.remove('modal-open');
                window.location.hash = e.target.dataset.link;
            } else if (e.target.tagName === 'SPAN') {
                this.classList.remove('open');
                document.body.classList.remove('modal-open');
            }
        });
})();
