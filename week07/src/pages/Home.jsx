import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovies } from "../api/movieApi";
import MovieCard from "../components/MovieCard";
import ThemeToggle from "../components/ThemeToggle";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Movie List</h1>
        <ThemeToggle />
      </Header>
      <Grid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 40px;

  h1 {
    font-size: 28px;
    color: ${({ theme }) => theme.text};
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default Home;
