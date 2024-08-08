import translations_en from "../../../../Utils/translations/en.json";
import translations_uk from "../../../../Utils/translations/uk.json";
import translations_cz from "../../../../Utils/translations/cz.json";

export function Categories() {
  const currentLanguage = localStorage.getItem("language") || "en";
  let categories = [];
  let servicesHeader = "";

  switch (currentLanguage) {
    case "uk":
      categories = translations_uk.categories;
      servicesHeader = translations_uk.servicesHeader;
      break;
    case "cz":
      categories = translations_cz.categories;
      servicesHeader = translations_cz.servicesHeader;
      break;
    case "en":
      categories = translations_en.categories;
      servicesHeader = translations_en.servicesHeader;
      break;
  }

  const englishCategories = translations_en.categories;

  return `
    <section class="Main_Spa_Categories Block_content">
      <ul class="Main_Spa_Categories_list">
        <li class="Main_headers">
          <h1 data-language="servicesHeader">${servicesHeader}</h1>
          <hr>
        </li>
        <li class="Main_Spa_Categories_content">
          <ul class="Main_Spa_Categories_content_list">
            ${categories
              .map((category, index) => {
                const englishCategory = englishCategories[index];
                return `
                  <li class="Main_Spa_Categories_content_item">
                    <ul class="Categories_content_item_list">
                      <li class="item_image">
                        <img src="${category.image}" alt="${category.name}" class="Category_img">
                      </li>
                      <li class="item_header">
                        <h2 data-language="categories.name-${category.id}">${category.name}</h2>
                      </li>
                      <li class="item_category_description">
                        <span class="item_description_text" data-language="categories.description-${category.id}">${category.description}</span>
                      </li>
                      <li class="item_info">
                        <a href="${category.moreInfoUrl}" class="Category_More_Info" data-language="learnMore"  data-section="${englishCategory.name}">Дізнатися більше</a>
                        <a href="#order-form-section" class="Category_Link_Sign_Up" data-language="signUp">Записатись</a>
                      </li>
                    </ul>
                  </li>
                `;
              })
              .join("")}
          </ul>
        </li>
      </ul>
    </section>
  `;
}
