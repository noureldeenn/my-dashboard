import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  selectedTheme: string;
}
const initialTheme = localStorage.getItem("theme") || "light";
const initialState: ThemeState = {
  selectedTheme: initialTheme, // Default theme
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.selectedTheme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
