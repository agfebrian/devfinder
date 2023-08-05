export const useColorIcon = (
  colorMode: "light" | "dark",
  disabled: boolean = false,
) => {
  const colors = [
    "white",
    "#4B6A9B",
    "rgba(75, 106, 155, 0.5)", // color disabled white
    "rgb(255, 255, 255, 0.5)", // color disabled dark
  ];
  const showColor = computed(() => {
    switch (colorMode) {
      case "light":
        return disabled ? colors[2] : colors[1];
      default:
        return disabled ? colors[3] : colors[0];
    }
  });
  return showColor.value;
};
