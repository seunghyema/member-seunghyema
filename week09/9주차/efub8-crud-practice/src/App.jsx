import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<DetailPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;