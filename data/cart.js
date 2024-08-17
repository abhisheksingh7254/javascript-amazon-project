export const cart=[];

export function addToCart(productId){
  let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
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

}