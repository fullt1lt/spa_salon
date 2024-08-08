import enTranslations from "../../../../Utils/translations/en.json";
import ukTranslations from "../../../../Utils/translations/uk.json";
import czTranslations from "../../../../Utils/translations/cz.json";

const translations = {
  en: enTranslations,
  uk: ukTranslations,
  cz: czTranslations,
};

export function Cafe(section) {
  let currentLanguage = localStorage.getItem("language") || "uk";
  let content = {};
  switch (section) {
    case "Desserts":
      content = translations[currentLanguage].Desserts;
      break;
    case "Coffee":
      content = translations[currentLanguage].Coffee;
      break;
    case "Special Offers":
      content = translations[currentLanguage].specialOffers;
      break;
    case "Teas":
      content = translations[currentLanguage].tea;
      break;
    default:
      content = translations[currentLanguage].Desserts;
  }
    return `
    <div class="TypeCafeCategories_main_list">
        <ul class="TypeCafeCategories_list">
            ${content
              .map(
                (item) => `
                <li class="TypeCafeCategories_item">
                    <ul class="TypeCafeCategories_item_list">
                        <li class="item_image">
                            <img src="${item.image}" alt="" class="TypeCafeCategories_img">
                        </li>
                        <li class="item_header">
                            <h2>${item.name}</h2>
                            <h2>${item.price}</h2>
                        </li>
                        <li class="item_composition">
                            <span>${item.ingredients}</span>
                        </li>
                        <li class="item_cafe_description">
                            <span>${item.description}</span>
                        </li>
                    </ul>
                    </li>
                `
              )
              .join("")}
        </ul>
    </div>
  `;
}
