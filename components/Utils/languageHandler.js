import { changeLanguage, updateText } from "./languageSwitcher";

export function initializeLanguageSwitcher() {
  document.addEventListener("DOMContentLoaded", () => {
    const languageButton = document.querySelector(".language-button");
    const languageMenu = document.querySelector(".language-menu");

    languageButton.addEventListener("click", (event) => {
      event.stopPropagation();
      languageMenu.style.display =
        languageMenu.style.display === "none" ? "flex" : "none";
      languageButton.style.display = "none";
    });

    document.querySelectorAll(".language-menu li").forEach((item) => {
      item.addEventListener("click", (event) => {
        const language = event.target.getAttribute("data-lang");
        changeLanguage(language);
        languageMenu.style.display = "none";
        languageButton.textContent = language.toUpperCase();
        languageButton.style.display = "flex";
      });
    });

    // Закрыть меню при клике вне его
    document.addEventListener("click", (event) => {
      if (
        !languageButton.contains(event.target) &&
        !languageMenu.contains(event.target)
      ) {
        languageMenu.style.display = "none";
      }
    });

    updateText();
  });
}
