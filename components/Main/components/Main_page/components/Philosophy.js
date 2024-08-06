import individual_approach from "/icon/individual_approach.svg";
import professional_care from "/icon/professional_care.svg";
import eco_strategies from "/icon/eco_strategies.svg";

export function Philosophy() {
  return `
    <section class="Main_Philosophy Block_content">
            <ul class="Main_Philosophy_list">
                <li class="Main_headers">
                    <h1 data-language="philosophyHeader">
                    </h1>
                    <hr>
                </li>
                <li class="Main_Philosophy_content">
                    <ul class="Main_Philosophy_content_list">
                        <li class="Content_item">
                            <img src="${eco_strategies}" alt="">
                            <h2 data-language="ecoStrategiesTitle"></h2>
                            <span data-language="ecoStrategiesText"></span>
                        </li>
                        <li class="Content_item">
                            <img src="${professional_care}" alt="">
                            <h2 data-language="professionalCareTitle"></h2>
                            <span data-language="professionalCareText"></span>
                        </li>
                        <li class="Content_item">
                            <img src="${individual_approach}" alt="">
                            <h2 data-language="individualApproachTitle"></h2>
                            <span data-language="individualApproachText"></span>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    `;
}
