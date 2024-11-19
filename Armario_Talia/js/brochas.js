{/* <script>

      function actualizarCantidad(boton) {
        const contenedorProducto = boton.closest('.product');
        const inputCantidad = contenedorProducto.querySelector('input');
        const precioUnitario = parseFloat(contenedorProducto.querySelector('.product-price').textContent.replace('$', '')); // Extraer precio unitario
        const precioTotalElement = contenedorProducto.querySelector('.precio-total'); // Suponiendo que tienes un elemento con esta clase

        let valorActual = parseInt(inputCantidad.value);

        if (boton.textContent === '+') {
          valorActual++;
        } else if (boton.textContent === '-') {
          valorActual = Math.max(valorActual - 1, 1); // Asegurar valor mínimo de 1
        }

        inputCantidad.value = valorActual;
        precioTotalElement.textContent = `$ ${valorActual * precioUnitario}`;
      }


      // Seleccionar todos los botones de cantidad
      const botonesCantidad = document.querySelectorAll('.quantity-controls button');

      // Agregar un event listener a cada botón
      botonesCantidad.forEach(boton => {
        boton.addEventListener('click', () => {
          actualizarCantidad(boton);
        });
      });
      function mostrarSeccion(id) {
        // Ocultar todas las secciones
        document.querySelectorAll('.product-gallery, .product-detail').forEach(seccion => {
          seccion.classList.remove('active');
        });

        // Mostrar la sección seleccionada
        document.getElementById(id).classList.add('active');
      }
      
      /*loggin
       // Simula la recuperación del usuario después del login
       const username = localStorage.getItem('username'); // Nombre guardado después de iniciar sesión
                    const userNameSpan = document.getElementById('user-name');
                    const logoutIcon = document.getElementById('logout-icon');

                    const usuario = JSON.parse(localStorage.getItem('usuario'));
                
                    // Si hay un usuario logueado, muestra su nombre e ícono
                    if (username) {
                        userNameSpan.textContent = `Bienvenido, ${usuario.nombre}!`;
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

    </script> */}