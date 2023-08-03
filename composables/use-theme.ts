export const useTheme = () => {
  const theme = useState<string>("theme", () => "light");
  if (process.client) {
    const persistTheme = localStorage.getItem("color-mode");
    if (persistTheme) theme.value = persistTheme;
  }

  return theme;
};
