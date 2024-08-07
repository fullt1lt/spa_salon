import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import { Main } from "./components/Main/Main";
import { Main_type_categories } from "./components/Main/components/Type_categories/Main_type_categories";
import {
  initializeLanguageSwitcher,
  updateText,
} from "./components/Utils/languageSwitcher";
import { setupFormSubmission } from "./components/Utils/setupFormSubmission";
import "./css/index.min.css";

function renderApp(content) {
  document.querySelector("#app").innerHTML = `
    ${Header()}
    ${content}
    ${Footer()}
  `;
  setupNavigation();
  initializeLanguageSwitcher();
  updateText();
}

function setupNavigation() {
  document.querySelectorAll("[data-section]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const section = event.target.dataset.section;
      let newMainContent;

      switch (section) {
        case "blog":
          newMainContent = Main_type_categories();
          break;
        case "gallery":
          newMainContent = Main();
          break;
        case "cafe":
          newMainContent = Main();
          break;
        case "main":
          newMainContent = Main();
          break;
        default:
          newMainContent = Main();
      }

      renderApp(newMainContent);
    });
  });

  setupFormSubmission();
}

document.addEventListener("DOMContentLoaded", () => {
  renderApp(Main());
});
