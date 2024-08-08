import cafe_image from "/image/cafe/cafe_image.png";
import image_coffe from "/image/cafe/image_coffe.png";
import enTranslations from "../../../../Utils/translations/en.json";
import ukTranslations from "../../../../Utils/translations/uk.json";
import czTranslations from "../../../../Utils/translations/cz.json";

const translations = {
  en: enTranslations,
  uk: ukTranslations,
  cz: czTranslations,
};

export function Main_Cafe() {
  const currentLanguage = localStorage.getItem("language") || "en";
  const mainCafe = translations[currentLanguage].mainCafe;
    return `
  

<div class="Cafe_main">
    <img src="${cafe_image}" alt="" class="Cafe_main_image">
    <ul class="Cafe_main_list">
        <li class="Cafe_main_header">
            <h1>${mainCafe.mainCafeHeader}</h1>
        </li>
        <li class="Cafe_main_info">
            <img src="${image_coffe}" alt="" class="image_coffe_left">
            <span>${mainCafe.mainCafeText}</span>
            <img src="${image_coffe}" alt="" class="image_coffe_right">
        </li>
    </ul>
</div>
    `;
}
