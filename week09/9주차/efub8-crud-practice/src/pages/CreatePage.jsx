import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createPost } from "../api/postApi";

function CreatePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요!");
      return;
    }
    await createPost({ title, content });
    navigate("/");
  };

  return (
    <Container>
      <h1>✏️ 게시글 작성</h1>
      <Form onSubmit={handleSubmit}>
        <Label>제목</Label>
        <Input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label>내용</Label>
        <Textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
        />
        <ButtonGroup>
          <CancelButton type="button" onClick={() => navigate("/")}>
            취소
          </CancelButton>
          <SubmitButton type="submit">작성 완료</SubmitButton>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default CreatePage;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    margin-bottom: 24px;
    font-size: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #555;
  margin-top: 8px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const CancelButton = styled.button`
  background-color: #e0e0e0;
  color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;

  &:hover {
    background-color: #bdbdbd;
  }
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;

  &:hover {
    background-color: #43a047;
  }
`;