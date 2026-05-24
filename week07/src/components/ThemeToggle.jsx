import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleTheme } from "../redux/store";

function ThemeToggle() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const isDark = mode === "dark";

  return (
    <ToggleButton
      type="button"
      onClick={() => dispatch(toggleTheme())}
      $isDark={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <Icon aria-hidden="true" $isDark={isDark}>
        {isDark ? "L" : "D"}
      </Icon>
      {isDark ? "Light" : "Dark"}
    </ToggleButton>
  );
}

const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  padding: 9px 16px;
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.accent};
  }
`;

const Icon = styled.span`
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $isDark }) => ($isDark ? "#ffd166" : "#24324a")};
  color: ${({ $isDark }) => ($isDark ? "#141414" : "#f8fafc")};
  font-size: 12px;
  font-weight: 800;
`;

export default ThemeToggle;
