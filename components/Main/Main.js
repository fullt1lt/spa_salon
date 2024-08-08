import { MainPage } from "./components/Main_page/MainPage";
import {
  Main_type_categories,
  setupMainTypeCategoriesSwitch,
} from "./components/Type_categories/Main_type_categories";
import {
  MainBlogNews,
  setupBlogNewsSwitch,
} from "./components/Main_Blog_News/MainBlogNews";
import { MainCafe, setupCafeSwitch } from "./components/Main_Cafe/MainCafe";
import {
  MainGallery,
  setupGallerySwitch,
} from "./components/Main_Gallery/MainGallery";

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
    case "HeaderGallery":
      setTimeout(setupGallerySwitch, 0);
      return MainGallery();
    case "HeaderCafe":
      setTimeout(setupCafeSwitch, 0);
      return MainCafe();
    case "Massages":
      setTimeout(setupMainTypeCategoriesSwitch, 0);
      return Main_type_categories(section);
    case "Peelings":
      setTimeout(setupMainTypeCategoriesSwitch, 0);
      return Main_type_categories(section);
    case "Steaming and Wrapping":
      setTimeout(setupMainTypeCategoriesSwitch, 0);
      return Main_type_categories(section);
    case "Ceremonies":
      setTimeout(setupMainTypeCategoriesSwitch, 0);
      return Main_type_categories(section);
    case "main":
      return MainPage();
    default:
      return MainPage();
  }
}
