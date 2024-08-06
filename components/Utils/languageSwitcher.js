// Импортируйте JSON файлы
import enTranslations from "./translations/en.json";
import ukTranslations from "./translations/uk.json";
import czTranslations from "./translations/cz.json";

const translations = {
  en: enTranslations,
  uk: ukTranslations,
  cz: czTranslations,
};

let currentLanguage = localStorage.getItem("language") || "uk";

function changeLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("language", language);
  updateText();
}

function updateText() {
  const translationData = translations[currentLanguage];

  document.querySelectorAll("[data-language]").forEach((element) => {
    const key = element.getAttribute("data-language");

    if (key.startsWith("categories.")) {
      categoriesUpdate(key, translationData, element);
    } else if (key.startsWith("therapist.")) {
      therapistUpdate(key, translationData, element);
    } else if (translationData[key]) {
      if (element.tagName === "INPUT") {
        element.placeholder = translationData[key];
      } else {
        element.textContent = translationData[key];
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateText();
});

function categoriesUpdate(key, translationData, element) {
  const [_, fieldWithId] = key.split(".");
  const [field, id] = fieldWithId.split("-");
  if (Array.isArray(translationData.categories)) {
    const category = translationData.categories.find(
      (c) => c.id === parseInt(id, 10)
    );

    if (category && category[field]) {
      element.textContent = category[field];
    }
  }
}

function therapistUpdate(key, translationData, element) {
  const [_, fieldWithId] = key.split(".");
  const [field, id] = fieldWithId.split("-");
  if (Array.isArray(translationData.specialists)) {
    const therapist = translationData.specialists.find(
      (c) => c.id === parseInt(id, 10)
    );

    if (therapist && therapist[field]) {
      element.textContent = therapist[field];
    }
  }
}

export { changeLanguage, updateText };
