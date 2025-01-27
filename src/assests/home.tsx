import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const API_KEY = 'd36aeffebed93395b91eafb4771cbbfb'; // Substitua pela sua chave da API do TMDB
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingResponse = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
        const topRatedResponse = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
        const upcomingResponse = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);

        setTrendingMovies(trendingResponse.data.results);
        setTopRatedMovies(topRatedResponse.data.results);
        setUpcomingMovies(upcomingResponse.data.results);
      } catch (error) {
        console.error('Erro ao buscar os filmes:', error);
      }
    };

    fetchMovies();
  }, []);

  interface MovieCarouselProps {
    title: string;
    movies: Array<{
      id: number;
      poster_path: string;
      title: string;
      vote_average: number;
    }>;
  }

  const MovieCarousel: React.FC<MovieCarouselProps> = ({ title, movies }) => (
    <div className="carousel-container">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-rating">⭐ {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">🎥 CloneFlix</div>
        <nav className="navbar">
          <a href="#trending">Trending</a>
          <a href="#top-rated">Top Rated</a>
          <a href="#upcoming">Upcoming</a>
        </nav>
      </header>

      <main className="content">
        <MovieCarousel title="Filmes em Alta" movies={trendingMovies} />
        <MovieCarousel title="Mais Bem Avaliados" movies={topRatedMovies} />
        <MovieCarousel title="Em Breve" movies={upcomingMovies} />
      </main>

      <footer className="footer">
        <p>© 2025 CloneFlix. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
