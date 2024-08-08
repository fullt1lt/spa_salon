import { Cafe } from "./components/Cafe";
import { Main_Cafe } from "./components/Main_Cafe";

export function MainCafe() {
  return `
      ${Main_Cafe()}
  `;
}

export function setupCafeSwitch() {
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
        case "Desserts":
          contentContainer.innerHTML = Cafe(section);
          break;
        case "Coffee":
          contentContainer.innerHTML = Cafe(section);
          break;
        case "Special Offers":
          contentContainer.innerHTML = Cafe(section);
          break;
        case "Teas":
          contentContainer.innerHTML = Cafe(section);
          break;
        default:
          contentContainer.innerHTML = Main_Cafe();
      }
    });
  });
}
