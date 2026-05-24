import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  return (
    <Card onClick={handleClick}>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <Title>{movie.title}</Title>
    </Card>
  );
}

const Card = styled.div`
  width: 160px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.accent};
  }
`;

const Title = styled.p`
  font-size: 12px;
  padding: 8px 4px;
  color: ${({ theme }) => theme.muted};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default MovieCard;
