import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/footer";
import { Main } from "./components/Main/Main";
import {
  initializeLanguageSwitcher,
  updateText,
} from "./components/Utils/languageSwitcher";
import { setupFormSubmission } from "./components/Utils/setupFormSubmission";
import "./css/index.min.css";

function renderApp(mainContent, headerContent) {
  document.querySelector("#app").innerHTML = `
    ${headerContent}
    ${mainContent}
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
      let newMainContent = Main(section);
      let newHeaderContent = Header(section);
      renderApp(newMainContent, newHeaderContent);
    });
  });

  setupFormSubmission();
}

document.addEventListener("DOMContentLoaded", () => {
  renderApp(Main(), Header());
});
