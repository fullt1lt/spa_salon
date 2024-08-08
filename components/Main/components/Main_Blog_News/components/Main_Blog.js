import mainBlogNewsImage from "/image/blogNews/main_blog_news.png";
import blog_image_1 from "/image/blogNews/blog_image_1.png";
import blog_image_2 from "/image/blogNews/blog_image_2.png";
import enTranslations from "../../../../Utils/translations/en.json";
import ukTranslations from "../../../../Utils/translations/uk.json";
import czTranslations from "../../../../Utils/translations/cz.json";

const translations = {
  en: enTranslations,
  uk: ukTranslations,
  cz: czTranslations,
};

export function Main_Blog() {
    const currentLanguage = localStorage.getItem("language") || "en";
      const mainBlog = translations[currentLanguage].mainBlog;
  return `
<div class="Blog_news_main">
    <img src="${mainBlogNewsImage}" alt="" class="Blog_news_main_image">
    <ul class="Blog_news_main_list">
        <li class="Blog_news_main_header">
            <h1>${mainBlog.mainBlogHeader}</h1>
        </li>
        <li class="Blog_news_main_info">
            <img src="${blog_image_1}" alt="" class="image_blog_news_left">
            <span>${mainBlog.mainBlogText}</span>
            <img src="${blog_image_2}" alt="" class="image_blog_news_right">
        </li>
    </ul>
</div>
    `;
}
