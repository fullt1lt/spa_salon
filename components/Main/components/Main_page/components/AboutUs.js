import Checkmark from "/icon/checkmark.svg";
import info_gallery_1 from "/image/info_gallery/info_gallery_1.png";
import info_gallery_2 from "/image/info_gallery/info_gallery_2.png";
import info_gallery_3 from "/image/info_gallery/info_gallery_3.png";

export function AboutUs() {
  return `
        <section class="Main_About_Us Block_content">
            <ul class="Main_About_Us_list">
                <li class="Main_headers">
                    <h1 data-language="aboutUsHeader">
                    </h1>
                    <hr>
                </li>
                <li class="Main_About_Us_info">
                    <ul class="Main_About_Us_info_list">
                        <li class="Main_About_Us_info_text">
                            <ul class="info_text_list">
                                <li class="info_text_item">
                                    <span class="empty_box"></span>
                                    <span data-language="aboutUsText1"></span>
                                </li>
                                <li class="info_text_item">
                                    <img src="${Checkmark}" alt="">
                                    <span data-language="aboutUsText2">
                                    </span>
                                </li>
                                <li class="info_text_item">
                                    <img src="${Checkmark}" alt="">
                                    <span data-language="aboutUsText3">
                                    </span>
                                </li>
                                <li class="info_text_item">
                                    <img src="${Checkmark}" alt="">
                                    <span data-language="aboutUsText4">
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <li class="Main_About_Us_info_gallery">
                            <ul class="Main_About_Us_info_gallery_list">
                                <li class="info_gallery_item">
                                    <img src="${info_gallery_1}" alt="">
                                </li>
                                <li class="info_gallery_item">
                                    <img src="${info_gallery_2}" alt="">
                                </li>
                                <li class="info_gallery_item">
                                    <img src="${info_gallery_3}" alt="">
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    `;
}
