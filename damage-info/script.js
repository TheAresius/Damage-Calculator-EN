document.addEventListener("DOMContentLoaded", function() {
        const btnTop = document.getElementById("btnTop");

        function scrollFunction() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollTop > 300) {
                btnTop.classList.add("show");
            } else {
                btnTop.classList.remove("show");
            }
        }

        window.addEventListener('scroll', scrollFunction);
        
        btnTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        const menuTrigger = document.getElementById('menuTrigger');
        const menuClose = document.getElementById('menuClose');
        const sideMenu = document.getElementById('sideMenu');
        const menuOverlay = document.getElementById('menuOverlay');

        function openMenu() {
            sideMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            sideMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        if(menuTrigger) menuTrigger.addEventListener('click', openMenu);
        if(menuClose)   menuClose.addEventListener('click', closeMenu);
        if(menuOverlay) menuOverlay.addEventListener('click', closeMenu);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    });