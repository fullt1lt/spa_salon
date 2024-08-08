import enTranslations from "../../../../Utils/translations/en.json";
import ukTranslations from "../../../../Utils/translations/uk.json";
import czTranslations from "../../../../Utils/translations/cz.json";

const translations = {
  en: enTranslations,
  uk: ukTranslations,
  cz: czTranslations,
};

export function Blog(section) {
  let currentLanguage = localStorage.getItem("language") || "uk";
  let content = {};
  switch (section) {
    case "Blog":
      content = translations[currentLanguage].blogs;
      break;
    case "News":
      content = translations[currentLanguage].news;
      break;
    default:
      content = translations[currentLanguage].blogs;
  }
  return `
    <div class="BlogNewsCategories_main_list">
        <ul class="BlogNewsCategories_list">
          ${content
            .map(
              (item) => `
                <li class="BlogNewsCategories_item">
                    <h1>${item.blogHeader}</h1>
                    <ul class="BlogNewsCategories_item_list">
                        <li class="item_image">
                            <img src="${item.blogMainImg}" alt="" class="BlogNewsCategories_img">
                        </li>
                        <li class="item_description">
                            <span>${item.blogDescription}</span>
                            <img src="${item.blogtextImg}" alt="" class="BlogNewsCategories_small_img">
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
