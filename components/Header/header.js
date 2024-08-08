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
    case "gallery":
      return HeaderMain();
    case "cafe":
      return HeaderMain();
    case "main":
      return HeaderMain();
    default:
      return HeaderMain();
  }
}