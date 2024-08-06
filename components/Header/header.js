import Logo from "/icon/logo_black.svg";
import Instagram from "/icon/instagram_black.svg";
import Facebook from "/icon/facebook_black.svg";
import Wats_up from "/icon/wats_up_black.svg";
import Image_header from "/header.png";

export function Header() {
  return `
    <header class="Main_Header" style="background: url(${Image_header}); background-repeat: no-repeat; background-size: cover;">
      <div class="Main_Header_Substrate">
        <ul class="Main_Header_list">
          <li class="Main_Header_info">
            <ul class="Main_Header_info_list">
              <li class="Main_info_logo">
                <a href="index.html" class="Main_info_link">
                  <img src="${Logo}" alt="" class="logo">
                </a>
                <span class="Main_info_link">Therapy Cup Spa</span>
              </li>
            </ul>
          </li>
          <li class="Main_Header_navigation">
            <ul class="Main_Header_navigation_list">
              <li class="Navigation_list_nav">
                <ul class="navigation_list_nav_list">
                  <li class="Main_Header_navigation_item"><a href="blog_news.html" data-language="blogNews">Новини i блог</a></li>
                  <li class="Main_Header_navigation_item"><a href="gallery.html" data-language="gallery">Фотогалерея</a></li>
                  <li class="Main_Header_navigation_item"><a href="cafe.html" data-language="cafe">Кав’ярня</a></li>
                </ul>
              </li>
              <li class="Main_Header_navigation_contacts">
                <ul class="Navigation_contacts_list">
                  <li class="contacts_item"><a href="#"><img src="${Facebook}" alt="" class="contacts_item_img"></a></li>
                  <li class="contacts_item"><a href="#"><img src="${Instagram}" alt="" class="contacts_item_img"></a></li>
                  <li class="contacts_item"><a href="#"><img src="${Wats_up}" alt="" class="contacts_item_img"></a></li>
                </ul>
              </li>
              ${LanguageSwitcher()}
            </ul>
          </li>
          <li class="Main_Header_text">
            <ul class="Main_Header_text_list">
              <li class="Main_Header_text_item">
                <a href="create_record.html" class="Header_Link_Sign_Up" data-language="signUp">Записатись</a>
              </li>
              <li class="Main_Header_text_item">
                <h1 data-language="spaTherapy">SPA-терапія</h1>
              </li>
              <li class="Main_Header_text_item">
                <h1 data-language="momentsOfPleasure">Подаруйте собі миті насолоди </h1>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  `;
}

function LanguageSwitcher() {
  const currentLanguage = localStorage.getItem("language") || "uk";
  return `
    <li class="language-switcher">
        <button class="language-button">${currentLanguage.toUpperCase()}</button>
        <ul class="language-menu" style="display: none;">
            <li class="language-menu-item" data-lang="uk">UK</li>
            <li class="language-menu-item" data-lang="en">EN</li>
            <li class="language-menu-item" data-lang="cz">CZ</li>
        </ul>
    </li>
  `;
}

export { LanguageSwitcher };
