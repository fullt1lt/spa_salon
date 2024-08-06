import { AboutUs } from "./components/AboutUs";
import { Philosophy } from "./components/Philosophy";
import { Categories } from "./components/Categories";

export function MainPage() {
  return `
        ${AboutUs()}
        ${Philosophy()}
        ${Categories()}
    `;
}



