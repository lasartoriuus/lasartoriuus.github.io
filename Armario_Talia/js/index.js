
    /*    const carousel = document.getElementById("carousel");
        let scrollAmount = 0;
        const scrollStep = 120;
        function scrollCarousel(direction) {
            scrollAmount += direction * scrollStep;
            carousel.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            });

            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
                carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
            }
        }
        function autoScrollCarousel() {
            scrollCarousel(1);
        }
        setInterval(autoScrollCarousel, 3000);

    // Simula la recuperación del usuario después del login
    const username = localStorage.getItem('username'); // Nombre guardado después de iniciar sesión
    const userNameSpan = document.getElementById('user-name');
    const logoutIcon = document.getElementById('logout-icon');

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    // Si hay un usuario logueado, muestra su nombre e ícono
    if (username) {
        userNameSpan.textContent = `Hola, ${usuario.nombre}!`;
        logoutIcon.style.display = 'inline';
    } else {
        // Si no hay usuario logueado, redirige al login
        window.location.href = "login.html";
    }


    // Lógica para cerrar sesión
    logoutIcon.addEventListener('click', () => {
        localStorage.removeItem('username'); // Elimina el usuario guardado
        window.location.href = "login.html"; // Redirige al login
    });
*/
