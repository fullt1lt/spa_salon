import { HeaderMain } from "./Header_Main/HeaderMain";
import { HeaderSecond } from "./Header_Second/HeaderSecond";

export function Header(section) {
  return `
        ${ChangeHeader(section)}
    `;
}

function ChangeHeader(section) {
  switch (section) {
    case "headerBlogNews":
      return HeaderSecond(section);
    case "HeaderGallery":
      return HeaderSecond(section);
    case "HeaderCafe":
      return HeaderSecond(section);
    case "Massages":
      return HeaderSecond(section);
    case "Peelings":
      return HeaderSecond(section);
    case "Steaming and Wrapping":
      return HeaderSecond(section);
    case "Ceremonies":
      return HeaderSecond(section);
    case "main":
      return HeaderMain();
    default:
      return HeaderMain();
  }
}