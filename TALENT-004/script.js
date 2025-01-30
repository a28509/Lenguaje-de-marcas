fetch('peliculas.json')
    .then(response => response.json())
    .then(peliculas => {
        const peliculasLista = document.getElementById('peliculas-lista');
        const mensaje = document.getElementById('mensaje');
        const filtroGenero = document.getElementById('genero-select');
        const ordenarAno = document.getElementById('ordenar-ano');
        const ordenarSelect = document.getElementById('ordenar-select');
        const buscarTitulo = document.getElementById('buscar-titulo');
        const buscarBtn = document.getElementById('buscar-btn');

        let peliculasFiltradas = peliculas;

        function renderizarPeliculas(peliculas) {
            peliculasLista.innerHTML = '';
            if (peliculas.length === 0) {
                mensaje.textContent = 'No se encontraron películas que coincidan con el filtro.';
            } else {
                mensaje.textContent = '';
                peliculas.forEach(pelicula => {
                    const li = document.createElement('li');
                    const img = document.createElement('img');
                    img.src = pelicula.imagen;
                    img.alt = pelicula.titulo;
                    img.style.width = '150px';
                    img.style.height = 'auto';
                    li.appendChild(img);

                    const texto = document.createElement('p');
                    texto.textContent = `${pelicula.titulo} (${pelicula.año}) - Género: ${pelicula.genero}`;
                    li.appendChild(texto);

                    peliculasLista.appendChild(li);
                });
            }
        }

        filtroGenero.addEventListener('change', (e) => {
            const generoSeleccionado = e.target.value;
            peliculasFiltradas = generoSeleccionado 
                ? peliculas.filter(p => p.genero === generoSeleccionado) 
                : peliculas;
            renderizarPeliculas(peliculasFiltradas);
        });

        ordenarAno.addEventListener('click', () => {
            ordenarSelect.style.display = ordenarSelect.style.display === 'none' ? 'inline-block' : 'none';
        });

        ordenarSelect.addEventListener('change', (e) => {
            const criterio = e.target.value;

            if (criterio === 'ascendente') {
                peliculasFiltradas.sort((a, b) => a.año - b.año);
            } else if (criterio === 'descendente') {
                peliculasFiltradas.sort((a, b) => b.año - a.año);
            }

            renderizarPeliculas(peliculasFiltradas);
            ordenarSelect.style.display = 'none';
        });

        buscarBtn.addEventListener('click', () => {
            const tituloBuscado = buscarTitulo.value.toLowerCase();
            peliculasFiltradas = peliculas.filter(p => 
                p.titulo.toLowerCase().includes(tituloBuscado)
            );
            renderizarPeliculas(peliculasFiltradas);
        });

        renderizarPeliculas(peliculas);
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

