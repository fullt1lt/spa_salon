import enTranslations from "../../../../Utils/translations/en.json";
import ukTranslations from "../../../../Utils/translations/uk.json";
import czTranslations from "../../../../Utils/translations/cz.json";

const translations = {
  en: enTranslations,
  uk: ukTranslations,
  cz: czTranslations,
};

export function Type_categories(section) {
  let currentLanguage = localStorage.getItem("language") || "uk";
  let content = {};
  switch (section) {
    case "Massages":
      content = translations[currentLanguage].typeMassages;
      break;
    case "Peelings":
      content = translations[currentLanguage].typePeelings;
      break;
    case "Steaming and Wrapping":
      content = translations[currentLanguage].typeSteamingWrapping;
      break;
    case "Ceremonies":
      content = translations[currentLanguage].teaCeremonies;
      break;
    default:
      content = translations[currentLanguage].typeMassages;
  }
  return `
    <div class="TypeCategories_main_list">
        <ul class="TypeCategories_list">
            ${content
              .map(
                (item) => `
                <li class="TypeCategory_item">
                    <ul class="TypeCategory_item_list">
                        <li class="item_image">
                            <img src="${item.image}" alt="" class="TypeCategory_img">
                        </li>
                        <li class="item_header">
                            <h2>${item.name}</h2>
                        </li>
                        <li class="item_type_category_description">
                            <span>${item.description}</span>
                        </li>
                        <li class="item_price_duration">
                            <ul class="item_price_duration_list">
                                <li class="item_info">
                                    <span>${item.duration}</span>
                                </li>
                                <li class="item_info">
                                    <span>${item.price}</span>
                                </li>
                            </ul>
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
