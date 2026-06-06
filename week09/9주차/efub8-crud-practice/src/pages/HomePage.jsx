import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getPosts, deletePost } from "../api/postApi";

function HomePage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠어요?")) return;
    await deletePost(id);
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <Container>
      <Header>
        <h1>게시판</h1>
        <WriteButton onClick={() => navigate("/create")}>글 작성</WriteButton>
      </Header>

      <PostList>
        {posts.length === 0 && <Empty>게시글이 없어요. 첫 글을 작성해보세요!</Empty>}
        {posts.map((post) => (
          <PostCard key={post.id}>
            <PostInfo>
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
            </PostInfo>
            <ButtonGroup>
              <DetailButton onClick={() => navigate(`/post/${post.id}`)}>
                상세보기
              </DetailButton>
              <EditButton onClick={() => navigate(`/edit/${post.id}`)}>
                수정
              </EditButton>
              <DeleteButton onClick={() => handleDelete(post.id)}>
                삭제
              </DeleteButton>
            </ButtonGroup>
          </PostCard>
        ))}
      </PostList>
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  h1 {
    font-size: 26px;
    font-weight: 700;
    color: var(--clover-dark);
  }
`;

const WriteButton = styled.button`
  background-color: var(--clover-accent);
  color: white;
  padding: 12px 24px;
  border-radius: 50px; 
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.15);

  &:hover {
    background-color: var(--clover-dark);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Empty = styled.p`
  text-align: center;
  color: #7a8a7a;
  margin-top: 80px;
  font-size: 15px;
`;

const PostCard = styled.div`
  background: white;
  border: 1px solid rgba(165, 214, 167, 0.3); 
  border-radius: 18px; 
  padding: 24px;
  box-shadow: 0 8px 20px rgba(46, 125, 50, 0.03); 
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(46, 125, 50, 0.06);
  }
`;

const PostInfo = styled.div`
  flex: 1;
  overflow: hidden;
`;

const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1a2e1a;
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostContent = styled.p`
  font-size: 14px;
  color: #667566; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
`;

const DetailButton = styled.button`
  background-color: var(--clover-light);
  color: var(--clover-dark);
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;

  &:hover {
    background-color: var(--clover-mint);
  }
`;

const EditButton = styled.button`
  background-color: #fffde7; 
  color: #f57f17;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;

  &:hover {
    background-color: #fff9c4;
  }
`;

const DeleteButton = styled.button`
  background-color: #fbe9e7; 
  color: #d84315;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;

  &:hover {
    background-color: #ffccbc;
  }
`;