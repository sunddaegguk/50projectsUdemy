{
  {
    const API_URL =
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ca40de407fa88f223a1b5812f78d49fe';
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
    const main = document.getElementById('main');
    const form = document.getElementById('form');
    const search = document.getElementById('search');
    ///get initial movies
    getMovies(API_URL);

    async function getMovies(url) {
      const res = await fetch(url);
      const data = await res.json();

      showMovies(data.results);
      console.log(data.results);
    }

    function showMovies(movies) {
      main.innerHTML = '';

      movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');

        movieEl.classList.add('movie');

        movieEl.innerHTML = ` 
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                  vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3>Overview</h3>
               ${overview}
            </div>
        `;
        main.appendChild(movieEl);
      });
    }
    function getClassByRate(vote) {
      if (vote >= 8) {
        return 'green';
      } else if (vote > 5) {
        return 'orange';
      } else {
        return 'red';
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const searchTerm = search.value;

      if (searchTerm && searchTerm !== '') {
        // 검색어를 사용하여 동적으로 URL을 생성
        const searchURL = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=ca40de407fa88f223a1b5812f78d49fe`;
        // 수정된 URL을 사용하여 영화 정보를 가져옴
        getMovies(searchURL);

        search.value = '';
      } else {
        window.location.reload();
      }
    });
  }
}
// 그리고 검색을 수행할 때는 해당 URL에 검색어를 추가하지 말아야 합니다.
// 대신에 검색어를 사용하여 동적으로 URL을 생성
// 하고 이를 getMovies 함수에 전달해야 합니다.
