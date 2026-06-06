import { NavLink, Route, Routes } from "react-router-dom";
import AddPage from "./pages/AddPage";
import ListPage from "./pages/ListPage";

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon">🍋</span>
          <div>
            <strong>SkateBoard TRICKS</strong>
            <span>스케이트 트릭 메모</span>
          </div>
        </div>
        <nav className="nav-links">
          <NavLink to="/" end>
            트릭 추가
          </NavLink>
          <NavLink to="/list">트릭 목록</NavLink>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<AddPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </main>
    </div>
  );
}
