import gallery_main from "/image/gallery/gallery_main.png";
import gallery_small_1 from "/image/gallery/gallery_small_1.png";
import gallery_small_2 from "/image/gallery/gallery_small_2.png";
import enTranslations from "../../../../Utils/translations/en.json";
import ukTranslations from "../../../../Utils/translations/uk.json";
import czTranslations from "../../../../Utils/translations/cz.json";

const translations = {
  en: enTranslations,
  uk: ukTranslations,
  cz: czTranslations,
};

export function Main_Gallery() {
  const currentLanguage = localStorage.getItem("language") || "en";
  const mainGallery = translations[currentLanguage].mainGallery;
  return `
  <div class="Gallery_main">
    <img src="${gallery_main}" alt="" class="Gallery_main_image">
    <ul class="Gallery_main_list">
        <li class="Gallery_main_header">
            <h1>${mainGallery.mainGalleryHeader}</h1>
        </li>
        <li class="Gallery_main_info">
            <img src="${gallery_small_1}" alt="" class="image_gallery_left">
            <span>${mainGallery.mainGalleryText}</span>
            <img src="${gallery_small_2}" alt="" class="image_gallery_right">
        </li>
    </ul>
</div>
    `;
}
