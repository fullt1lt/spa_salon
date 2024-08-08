import Logo from "/icon/logo_black.svg";
import Instagram from "/icon/instagram_black.svg";
import Facebook from "/icon/facebook_black.svg";
import Wats_up from "/icon/wats_up_black.svg";

export function Footer() {
  return `
    <footer class="Main_Footer Background_Main_Page_Footer" id="footer">
        <ul class="Main_Footer_list">
            <li class="Main_Footer_headers">
                <h1 data-language="contacts">Контакти</h1>
                <hr>
            </li>
            <li class="Main_Footer_Info">
                <span>Therapy Cup Spa, s.r.o.</span>
                <span>Recepce +420776652345</span>
                <span>IČ: 05682606</span>
                <span>DIČ: CZ05782303</span>
                <span>Fakturační adresa: Na Lysině 678/25, 147 00, Praha 4, Česká republika</span>
            </li>
            <li class="Main_Footer_navigation">
                <ul class="Main_Footer_navigation_list">
                    <li class="Navigation_list_nav">
                        <ul class="navigation_list_nav_list">
                            <li class="Main_Header_navigation_item">
                                <a href="#" data-language="blogNews" data-section="headerBlogNews">Новини i блог</a>
                            </li>
                            <li class="Main_Header_navigation_item">
                                <a href="#" data-language="gallery" data-section="gallery">Фотогалерея</a>
                            </li>
                            <li class="Main_Header_navigation_item">
                                <a href="#" data-language="cafe" data-section="cafe">Кав’ярня</a>
                            </li>
                        </ul>
                    </li>
                    <li class="Main_Footer_navigation_contacts">
                        <ul class="Navigation_contacts_list">
                            <li class="contacts_item"><a href="#"><img src="${Facebook}" alt="" class="contacts_item_img"></a></li>
                            <li class="contacts_item"><a href="#"><img src="${Instagram}" alt="" class="contacts_item_img"></a></li>
                            <li class="contacts_item"><a href="#"><img src="${Wats_up}" alt="" class="contacts_item_img"></a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="Main_Footer_info">
                <ul class="Main_Footer_info_list">
                    <li class="Main_info_logo">
                        <a href="#" class="Main_info_link" data-section="main">
                            <img src="${Logo}" alt="" class="logo">
                        </a>
                        <span class="Main_info_link">
                            Therapy Cup Spa
                        </span>
                    </li>
                </ul>
            </li>
        </ul>
    </footer>
    `;
}
