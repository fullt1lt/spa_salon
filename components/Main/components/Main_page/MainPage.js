import { AboutUs } from "./components/AboutUs";
import { Philosophy } from "./components/Philosophy";
import { Categories } from "./components/Categories";
import { Massage_Therapist } from "./components/Massage_Therapist";
import { WhyUs } from "./components/WhyUs";
import { Order } from "./components/Order";

export function MainPage() {
  return `
        ${AboutUs()}
        ${Philosophy()}
        ${Categories()}
        ${Massage_Therapist()}
        ${WhyUs()}
        ${Order()}
    `;
}



