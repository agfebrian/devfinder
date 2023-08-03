export const useColorIcon = (colorMode: "light" | "dark") => {
  const colors = ["white", "#4B6A9B"];
  const showColor = computed(() => {
    switch (colorMode) {
      case "light":
        return colors[1];
      default:
        return colors[0];
    }
  });
  return showColor.value;
};
