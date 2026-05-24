import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ThemeToggle from "../components/ThemeToggle";

function MovieInfo() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const movie = state?.movie;

  if (!movie) {
    return (
      <Container>
        <Header>
          <BackBtn onClick={() => navigate("/")}>Back</BackBtn>
          <ThemeToggle />
        </Header>
        <p>Not found</p>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackBtn onClick={() => navigate("/")}>Back</BackBtn>
        <ThemeToggle />
      </Header>

      <Content>
        <img src={movie.medium_cover_image} alt={movie.title} />

        <Info>
          <h1>{movie.title}</h1>
          <MetaRow>
            <span>Rating {movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.runtime} min</span>
          </MetaRow>
          {movie.genres && (
            <Genres>
              {movie.genres.map((genre) => (
                <Genre key={genre}>{genre}</Genre>
              ))}
            </Genres>
          )}
          <Summary>{movie.summary}</Summary>
        </Info>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 40px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`;

const BackBtn = styled.button`
  background: ${({ theme }) => theme.buttonBg};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
  }
`;

const Content = styled.div`
  display: flex;
  gap: 40px;

  img {
    width: 220px;
    height: 330px;
    object-fit: cover;
    border-radius: 10px;
    flex-shrink: 0;
    border: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 720px) {
    flex-direction: column;

    img {
      width: 180px;
      height: 270px;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.text};
  }
`;

const MetaRow = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.muted};
  font-size: 14px;
  flex-wrap: wrap;
`;

const Genres = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Genre = styled.span`
  background: ${({ theme }) => theme.chipBg};
  color: ${({ theme }) => theme.text};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
`;

const Summary = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.muted};
  max-width: 600px;
`;

export default MovieInfo;
