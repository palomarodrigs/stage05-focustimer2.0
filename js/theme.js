function darkMode({ buttonDarkMode, buttonLightMode }) {
  buttonDarkMode.addEventListener("click", () => {
    buttonDarkMode.classList.add("hide");
    buttonLightMode.classList.remove("hide");

    document.body.classList.add("dark-theme");
  });

  buttonLightMode.addEventListener("click", () => {
    buttonDarkMode.classList.remove("hide");
    buttonLightMode.classList.add("hide");

    document.body.classList.remove("dark-theme");
  });
}

export { darkMode };
