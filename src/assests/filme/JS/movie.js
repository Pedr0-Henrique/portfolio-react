document.addEventListener('DOMContentLoaded', function () {
    const apiKey = "d36aeffebed93395b91eafb4771cbbfb";
    const imageBaseURL = "https://image.tmdb.org/t/p/w500/";
    const lista = document.getElementById('lista');
    const searchInput = document.getElementById('searchInput');
    const checkboxFavoritos = document.getElementById('mostrarFavoritos');

    let filmesFavoritos = [];

    function adicionarItem(item, tipo) {
        const div = document.createElement('div');
        div.classList.add('item');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = imageBaseURL + item.backdrop_path;
        img.alt = item.title || item.name;
        imgContainer.appendChild(img);

        const content = document.createElement('div');
        content.classList.add('content');

        const pTitulo = document.createElement('div');
        pTitulo.classList.add('titulo');
        pTitulo.textContent = item.title || item.name;
        content.appendChild(pTitulo);

        const pDescricao = document.createElement('p');
        pDescricao.textContent = item.overview;
        content.appendChild(pDescricao);

        const pData = document.createElement('p');
        pData.textContent = `Data de lançamento: ${item.release_date || item.first_air_date}`;
        content.appendChild(pData);

        const nota = document.createElement('div');
        nota.classList.add('nota');
        nota.textContent = `⭐ ${item.vote_average || 'Sem avaliação'}`;
        content.appendChild(nota);

        const favorito = document.createElement('div');
        favorito.classList.add('favorito');
        favorito.innerHTML = filmesFavoritos.includes(item) ? '❤️' : '♡';
        favorito.addEventListener('click', () => {
            if (filmesFavoritos.includes(item)) {
                filmesFavoritos = filmesFavoritos.filter(fav => fav !== item);
                favorito.innerHTML = '♡';
            } else {
                filmesFavoritos.push(item);
                favorito.innerHTML = '❤️';
            }

            if (checkboxFavoritos.checked) {
                exibirApenasFavoritos();
            } else {
                displayResults(searchInput.value);
            }
        });
        content.appendChild(favorito);

        div.appendChild(imgContainer);
        div.appendChild(content);

        // Adiciona o item à lista com transição suave
        lista.appendChild(div);
        setTimeout(() => div.classList.add('visible'), 10);  // Aplica a classe para a transição
    }

    function displayResults(searchTerm) {
        lista.innerHTML = '';

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-BR`)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(item => {
                    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        adicionarItem(item, 'filme');
                    }
                });
            })
            .catch(error => console.error('Erro ao obter lista de filmes populares:', error));

        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=pt-BR`)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(item => {
                    if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        adicionarItem(item, 'serie');
                    }
                });
            })
            .catch(error => console.error('Erro ao obter lista de séries populares:', error));
    }

    function exibirApenasFavoritos() {
        lista.innerHTML = '';
        filmesFavoritos.forEach(item => adicionarItem(item, item.title ? 'filme' : 'serie'));
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value;
        if (checkboxFavoritos.checked) {
            exibirApenasFavoritos();
        } else {
            displayResults(searchTerm);
        }
    });

    checkboxFavoritos.addEventListener('change', () => {
        const searchTerm = searchInput.value;
        if (checkboxFavoritos.checked) {
            exibirApenasFavoritos();
        } else {
            displayResults(searchTerm);
        }
    });

    displayResults('');
});
