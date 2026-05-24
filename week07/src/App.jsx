import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";

const themes = {
  dark: {
    background: "#141414",
    surface: "#1f1f1f",
    card: "#242424",
    text: "#ffffff",
    muted: "#b9b9b9",
    border: "#4a4a4a",
    accent: "#e50914",
    buttonBg: "#252525",
    chipBg: "#333333",
  },
  light: {
    background: "#f5f7fb",
    surface: "#ffffff",
    card: "#ffffff",
    text: "#1f2937",
    muted: "#5f6b7a",
    border: "#d8dee9",
    accent: "#2563eb",
    buttonBg: "#eef4ff",
    chipBg: "#e8eef8",
  },
};

function App() {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={themes[mode]}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
