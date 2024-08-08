import { Blog } from "./components/Blog";
import { Main_Blog } from "./components/Main_Blog";

export function MainBlogNews() {
  return `
      ${Main_Blog()}
  `;
}

export function setupBlogNewsSwitch() {
  document.querySelectorAll("[data-header-second]").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelectorAll("[data-header-second]").forEach((li) => {
        li.classList.remove("Active");
      });
      item.classList.add("Active");

      const section = item.dataset.headerSecond;
      const contentContainer = document.getElementById("content-container");
      if (!contentContainer) return;
      switch (section) {
        case "Blog":
          contentContainer.innerHTML = Blog(section);
          break;
        case "News":
          contentContainer.innerHTML = Blog(section);
          break;
        default:
          contentContainer.innerHTML = Main_Blog();
      }
    });
  });
}