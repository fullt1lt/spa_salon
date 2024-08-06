import Logo from "/icon/logo_black.svg";

export function Order() {
  return `
          <section class="Main_Order Block_content" id="order-form-section">
            <ul class="Main_Order_list">
                <li class="Main_headers">
                    <h1 data-language="OrderHeader"></h1>
                    <hr>
                </li>
                <li class="Order_main_list">
                    <ul class="Order_form_list">
                        <li class="Order_form_item">
                            <h2 class="order_form_header" data-language="orderText"></h2>
                            <form id="order-form" class="order_form">
                                <input type="text" id="from_name" name="from_name" placeholder="Ваше ім'я" data-language="placeholderName" required>
                                <input type="email" id="from_email" name="from_email" placeholder="Ваш email" data-language="placeholderEmail" required>
                                <input type="text" id="from_phone" name="from_phone" placeholder="Ваш телефон" data-language="placeholderPhone" required>
                                <button type="submit" data-language="signUp">Записатися</button>
                            </form>
                        </li>
                        <li class="Review_image_item">
                            <img src="${Logo}" alt="" class="Review_image">
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    `;
}
