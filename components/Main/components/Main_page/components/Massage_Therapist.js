import enTranslations from "../../../../Utils/translations/en.json";
import ukTranslations from "../../../../Utils/translations/uk.json";
import czTranslations from "../../../../Utils/translations/cz.json";

const translations = {
  en: enTranslations,
  uk: ukTranslations,
  cz: czTranslations,
};

export function Massage_Therapist() {
  const currentLanguage = localStorage.getItem("language") || "en";
  const specialists = translations[currentLanguage].specialists;
  const specialistsHeader = translations[currentLanguage].specialistsHeader;

  return `
    <section class="Main_Massage_Therapist Block_content">
      <ul class="Main_Massage_Therapist_list">
        <li class="Main_headers">
          <h1 data-language="specialistsHeader">${specialistsHeader}</h1>
          <hr>
        </li>
        <li class="Main_Massage_Therapist_content">
          <ul class="Main_Massage_Therapist_content_list">
            ${specialists
              .map(
                (therapist) => `
              <li class="Massage_Therapist_content_item">
                <img src="${therapist.image}" alt="${therapist.name}" class="Massage_Therapist_img">
                <ul class="content_item_info_list">
                  <li class="content_item_info">
                    <span class="content_item_name" data-language="therapist.name-${therapist.id}">${therapist.name} </span>
                    <ul class="content_item_position_list">
                        <li class="content_item_position">
                          <span data-language="therapist.role-${therapist.id}">${therapist.role}</span>
                        </li>
                    </ul>
                  </li>
                  <li class="content_item_sign_up">
                    <a href="#order-form-section" class="therapist_link_sign_up" data-language="signUp">Записатись</a>
                  </li>
                </ul>
              </li>
            `
              )
              .join("")}
          </ul>
        </li>
      </ul>
    </section>
  `;
}
