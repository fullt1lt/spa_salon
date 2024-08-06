import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import { Main } from "./components/Main/Main";
import { initializeLanguageSwitcher } from "./components/Utils/languageHandler";
import "./css/index.min.css";

document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
`;

initializeLanguageSwitcher();
