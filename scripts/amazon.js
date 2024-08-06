const products=[
  {
    name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
    img:'athletic-cotton-socks-6-pairs',
    rating:{
      stars:4.5,
      count:87
      },
    priceCent:1090},
    {
      name:'Intermediate Size Basketball',
      img:'intermediate-composite-basketball',
      rating:{
        stars:3.0,
        count:127
        },
      priceCent:2095},
    {
      name:'Adults Plain Cotton T-Shirt - 2 Pack',
      img:'adults-plain-cotton-tshirt-2-pack-teal',
      rating:{
        stars:4.5,
        count:56
        },
      priceCent:799 
      },
      {
        name:'Adults Plain Cotton T-Shirt - 2 Pack',
        img:'adults-plain-cotton-tshirt-2-pack-teal',
        rating:{
          stars:4.5,
          count:56
          },
        priceCent:799 
        }];

      //HTML genreted through JAVASCRIPT....
      let productHTML='';
      products.forEach((product)=>{
        productHTML+=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="images/products/${product.img}.jpg">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="./images/ratings/rating-${product.rating.stars *10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCent /100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
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

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`;
        
        console.log(productHTML);
      });
      document.querySelector('.js-products-grid').innerHTML=productHTML;