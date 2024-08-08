import { MainPage } from "./components/Main_page/MainPage";
import { Main_type_categories } from "./components/Type_categories/Main_type_categories";
import {
  MainBlogNews,
  setupBlogNewsSwitch,
} from "./components/Main_Blog_News/MainBlogNews";
import { MainCafe, setupCafeSwitch } from "./components/Main_Cafe/MainCafe";

export function Main(section) {
  let content = ChangeMain(section);
  return `
    <main class="Main_Page" id="content-container">
        ${content}
    </main>
  `;
}

function ChangeMain(section) {
  switch (section) {
    case "headerBlogNews":
      setTimeout(setupBlogNewsSwitch, 0);
      return MainBlogNews();
    case "gallery":
      return MainPage();
    case "HeaderCafe":
      setTimeout(setupCafeSwitch, 0);
      return MainCafe();
    case "main":
      return MainPage();
    default:
      return MainPage();
  }
}
