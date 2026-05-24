import { combineReducers, createStore } from "redux";

const TOGGLE_THEME = "theme/toggle";

const initialThemeState = {
  mode: "dark",
};

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        mode: state.mode === "dark" ? "light" : "dark",
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = createStore(rootReducer);

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
