/*Окно "как нас найти" modal-subscribe */
const contactsLink = document.querySelector(".contacts-link"); /*кнопка открыть*/
const modalSubscribe = document.querySelector(".modal-subscribe");/*модальное окно*/
const modalSubscribeClose = document.querySelector(".modal-subscribe-close");/*кнопка закрыть*/
const nameBox = document.querySelector(".name-box"); /*поле имя*/
const modalSubscribeForm = document.querySelector(".modal-subscribe-form");/*Вся Форма*/
const usermailBox = document.querySelector(".usermail-box");/*поле почта*/
const commentFieldBox = document.querySelector(".comment-field-box");/*поле текст*/

if (contactsLink !== null)
  contactsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalSubscribe.classList.add("modal-show");
    nameBox.focus();
  });
if (modalSubscribeClose !== null)
  modalSubscribeClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalSubscribe.classList.remove("modal-show");
    modalSubscribe.classList.remove("modal-error");
  });
if (modalSubscribeClose !== null)
  modalSubscribeForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
if (modalSubscribeClose !== null)
  modalSubscribeForm.addEventListener("submit", function (evt) {
    if (!nameBox.value || !usermailBox.value || !commentFieldBox.value) {
      evt.preventDefault();
      modalSubscribe.classList.remove("modal-error");/*три нижних строчки чтобы тряслась форма*/
      modalSubscribe.offsetWidth = modalSubscribe.offsetWidth;
      modalSubscribe.classList.add("modal-error");
    }
  });
if (modalSubscribe !== null)
window.addEventListener("keydown", function (evt) {/*выключение по ESC*/
  if (evt.keyCode === 27) {
    if (modalSubscribe.classList.contains("modal-show")) {
      evt.preventDefault();
      modalSubscribe.classList.remove("modal-show");
      modalSubscribe.classList.remove("modal-error");
    }
  }
});
/**/
/*Карта*/
const contactsMap = document.querySelector(".contacts-map");/*кнопка открыть карту*/
const modalMap = document.querySelector(".modal-map");/*карта*/
const mapClose = document.querySelector(".map-close");/*кнопка закрыть*/

if (contactsMap !== null)
  contactsMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show-map");
  });
if (mapClose !== null)
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show-map");
  });
if (modalMap !== null)
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains("modal-show-map")) {
      evt.preventDefault();
      modalMap.classList.remove("modal-show-map");
    }
  }
});
/*Доставка Гарантия Кредит*/
const servicesItemFirst = document.querySelector(".services-item-first");/*кнопка доставка*/
const servicesItemSecond = document.querySelector(".services-item-second");/*кнопка гарантия*/
const servicesItemThird = document.querySelector(".services-item-third");/*кнопка кредит*/

const servicesDelivery = document.querySelector(".services-delivery");/*описание доставка*/
const servicesGuarantee = document.querySelector(".services-guarantee");/*описание гарантия*/
const servicesCredit = document.querySelector(".services-credit");/*описание кредит*/

const servicesBox = document.querySelector(".services-box");/*класс ВКЛЮЧЕНИЯ*/

if (servicesItemFirst !== null)
  servicesItemFirst.addEventListener("click", function (evt) {
    evt.preventDefault();
    evt.target.classList.add("services-item-active");
    servicesItemSecond.classList.remove("services-item-active");
    servicesItemThird.classList.remove("services-item-active");

    servicesDelivery.classList.add("services-box");
    servicesGuarantee.classList.remove("services-box");
    servicesCredit.classList.remove("services-box");
  });
if (servicesItemSecond !== null)
  servicesItemSecond.addEventListener("click", function (evt) {
    evt.preventDefault();

    evt.target.classList.add("services-item-active");
    servicesItemFirst.classList.remove("services-item-active");
    servicesItemThird.classList.remove("services-item-active");

    servicesDelivery.classList.remove("services-box");
    servicesGuarantee.classList.add("services-box");
    servicesCredit.classList.remove("services-box");
  });
if (servicesItemThird !== null)
  servicesItemThird.addEventListener("click", function (evt) {
    evt.preventDefault();

    evt.target.classList.add("services-item-active");
    servicesItemFirst.classList.remove("services-item-active");
    servicesItemSecond.classList.remove("services-item-active");

    servicesDelivery.classList.remove("services-box");
    servicesGuarantee.classList.remove("services-box");
    servicesCredit.classList.add("services-box");
  });
/*Окно добавления в корзину*/
const buttonBuy = document.querySelectorAll(".button-buy");/*кнопка купить*/
const modalMovedBasket = document.querySelector(".modal-moved-basket");/*модальное окно*/
const modalBasketClose = document.querySelector(".modal-basket-close");/*кнопка закрыть*/
const basketShow = document.querySelector(".basket-show");/*класс ЗАКРЫТЬ*/

buttonBuy.forEach(element => {
  element.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (!modalMovedBasket.classList.contains("basket-show")) {
      modalMovedBasket.classList.add("basket-show");
    }

  })
});
if (modalBasketClose !== null)
  modalBasketClose.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalMovedBasket.classList.remove("basket-show");
  });
window.addEventListener("keydown", function (evt) {/*выключение по ESC*/
      if (evt.keyCode === 27) {
        if (modalMovedBasket.classList.contains("basket-show")) {
          evt.preventDefault();
          modalMovedBasket.classList.remove("basket-show");
          modalMovedBasket.classList.remove("basket-show");
        }
      }
});
