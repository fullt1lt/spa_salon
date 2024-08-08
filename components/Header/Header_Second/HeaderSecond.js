import translations_en from "../../Utils/translations/en.json";
import translations_uk from "../../Utils/translations/uk.json";
import translations_cz from "../../Utils/translations/cz.json";
import Logo from "/icon/logo_black.svg";

export function HeaderSecond(section) {
  return `
    <header class="Header_Second">
        <ul class="Header_Second_list">
            <li class="Header_Second_info">
                <ul class="Header_Second_info_list">
                    <li class="Header_Second_logo">
                        <a href="#" class="Header_Second_link" data-section="main">
                            <img src="${Logo}" alt="" class="logo">
                        </a>
                        <span class="Header_Second_info_link">
                            Therapy Cup Spa
                        </span>
                    </li>
                </ul>
            </li>
            <li class="Header_Second_navigation">
                <ul class="Header_Second_navigation_list">
                    <li class="Navigation_list_nav">
                        <ul class="navigation_list_nav_list">
                            ${navigatorSwitcher(section)}
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </header>
    `;
}

function navigatorSwitcher(section) {
  const currentLanguage = localStorage.getItem("language") || "en";
    let headerList = [];
    let dataHeaderSecond = translations_en[section];
  switch (currentLanguage) {
    case "uk":
      headerList = translations_uk[section];
      break;
    case "cz":
      headerList = translations_cz[section];
      break;
    case "en":
      headerList = translations_en[section];
      break;
  }

  return `
        ${headerList
          .map(
            (item, index) => `
          <li class="Main_Second_Header_navigation_item" data-header-second="${dataHeaderSecond[index]}">
            <a href="#">${item}</a>
          </li>
        `
          )
          .join("")}
    `;
}
