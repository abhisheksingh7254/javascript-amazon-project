export let cart=JSON.parse( localStorage.getItem('cart'));

if(!cart){
  cart=[
    {
      productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity:2
    },{
      productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1
    }
  ];
}

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

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
    saveToStorage();
}
//how to remove an item from cart ,,here i m using product id of the cartItem to select the specific item from list of cart[]

export function removeCartItem(productId){
  const newCart=[];
  cart.forEach((cartItem)=>{

    if(cartItem.productId !== productId){
      newCart.push(cartItem);
  }});
  cart=newCart;
  saveToStorage();
  }
