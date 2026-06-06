import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getPostById, deletePost } from "../api/postApi";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPostById(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("정말 삭제하시겠어요?")) return;
    await deletePost(id);
    navigate("/");
  };

  if (!post) return <div>로딩 중...</div>;

  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>← 목록으로</BackButton>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
      <ButtonGroup>
        <EditButton onClick={() => navigate(`/edit/${post.id}`)}>수정</EditButton>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </ButtonGroup>
    </Container>
  );
}

export default DetailPage;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 14px;
  margin-bottom: 24px;
  padding: 0;

  &:hover {
    color: #333;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 32px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const EditButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;

  &:hover {
    background-color: #1e88e5;
  }
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;

  &:hover {
    background-color: #e53935;
  }
`;