import { Type_categories } from "./components/Type_categories";

export function Main_type_categories(section) {
  return `
      ${Type_categories(section)}
  `;
}

export function setupMainTypeCategoriesSwitch() {
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
        case "Massages":
          contentContainer.innerHTML = Type_categories(section);
          break;
        case "Peelings":
          contentContainer.innerHTML = Type_categories(section);
          break;
        case "Steaming and Wrapping":
          contentContainer.innerHTML = Type_categories(section);
          break;
        case "Ceremonies":
          contentContainer.innerHTML = Type_categories(section);
          break;
        default:
          contentContainer.innerHTML = Type_categories(section);
      }
    });
  });
}
