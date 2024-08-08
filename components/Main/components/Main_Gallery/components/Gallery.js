import enTranslations from "../../../../Utils/translations/en.json";
import ukTranslations from "../../../../Utils/translations/uk.json";
import czTranslations from "../../../../Utils/translations/cz.json";

const translations = {
  en: enTranslations,
  uk: ukTranslations,
  cz: czTranslations,
};

export function Gallery(section) {
  let currentLanguage = localStorage.getItem("language") || "uk";
  let content = {};
  switch (section) {
    case "Bath":
      content = translations[currentLanguage].Bath;
      break;
    case "Cafe":
      content = translations[currentLanguage].Cafe;
      break;
    case "Process":
      content = translations[currentLanguage].Process;
      break;
    case "Spa":
      content = translations[currentLanguage].Spa;
      break;
    default:
      content = translations[currentLanguage].Bath;
  }
  return `
    <div class="GalleryCategories_main_list">
        <ul class="GalleryCategories_list">
            ${content
              .map(
                (item) => `
                <li class="GalleryCategories_item">
                    <img src="${item.image}" alt="" class="GalleryCategories_img">
                </li>
                `
              )
              .join("")}
        </ul>
    </div>
  `;
}
