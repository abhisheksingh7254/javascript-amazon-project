import {cart} from '../data/cart.js';
import { products } from '../data/products.js';


//HTML genreted through JAVASCRIPT....
let productHTML = "";
products.forEach((product) => {
  productHTML += `<div class="product-container">
          <div class="product-image-container">
            <image class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <image class="product-rating-stars"
              src="./images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div id="added" class="added-to-cart js-added-to-cart-${product.id}">
            <image src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id="${product.id}" data-product-rating="${
    product.rating.stars
  }">
            Add to Cart
          </button>
        </div>`;

  // console.log(productHTML);
});
document.querySelector(".js-products-grid").innerHTML = productHTML;

const addedMessageTimeouts = {}; //to store the setTimeOut returned id for each product
//Add to Cart button Functional >>>>
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const { productId } = button.dataset; //const productId=button.dataset.productId; ---->Destructuring

    let matchingItem;
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });
    //<select> quantity
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
    // const quantity = quantitySelector.value;
    //it return value as string..so covert it as number using-- Number() method>
    const quantity = Number(quantitySelector.value);
    // console.log(quantity);

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({ productId, quantity }); //{productId:productId,quantity:quantity} --->Destructuring
    }

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
      // console.log(cart);
    });
    const addedMessage = document.querySelector(
      `.js-added-to-cart-${productId}`
    );
    addedMessage.classList.add("js-added-visible");
    setTimeout(() => {
      const prevTimeoutId = addedMessageTimeouts[productId];
      if (prevTimeoutId) {
        clearTimeout(prevTimeoutId);
      }

      const timeOutId = setTimeout(() => {
        addedMessage.classList.remove("js-added-visible");
      }, 2000);
      addedMessageTimeouts[productId] = timeOutId;
      // console.log(addedMessageTimeouts[productId]);
    });

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  });
});
