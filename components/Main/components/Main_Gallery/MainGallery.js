import { Gallery } from "./components/Gallery";
import { Main_Gallery } from "./components/Main_Gallery";

export function MainGallery() {
  return `
      ${Main_Gallery()}
  `;
}

export function setupGallerySwitch() {
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
        case "Bath":
          contentContainer.innerHTML = Gallery(section);
          break;
        case "Cafe":
          contentContainer.innerHTML = Gallery(section);
          break;
        case "Process":
          contentContainer.innerHTML = Gallery(section);
          break;
        case "Spa":
          contentContainer.innerHTML = Gallery(section);
          break;
        default:
          contentContainer.innerHTML = Main_Gallery();
      }
    });
  });
}
