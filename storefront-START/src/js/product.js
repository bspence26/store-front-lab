(function () {
  const product = JSON.parse(localStorage.getItem("product"));
  // create template
  const markUp = renderProductPage(product);

  document.querySelector("main").innerHTML.markUp;

  function renderProductPage(product) {
    const { id, name, price, sizes, long, meta, productShots } = product;
    // seed into template
    const template = `
    <section class="product">
    <ul class="shots">
      <li>
        <img class="shots" src="./assets/shoes/${name.toLowerCase()}/${
      productShots[0]
    }" alt="" />
      </li>
      <li>
        <img class="shots" src="./assets/shoes/${name.toLowerCase()}/${
      productShots[1]
    }" alt="" />
      </li>
      <li>
        <img class="shots" src="./assets/shoes/${name.toLowerCase()}/${
      productShots[2]
    }" alt="" />
      </li>
      <li>
        <img class="shots" src="./assets/shoes/${name.toLowerCase()}/${
      productShots[3]
    }" alt="" />
      </li>
    </ul>
    
    <div class="details">
      <header>
        <h2 class="title">${name}</h2>
        <p class="price">${price / 100}</p>
      </header>
      <ul class="sizes">
    ${sizeFormatter(sizes)}
      </ul>
    
      <div class="quantity">quantity</div>
      <ul class="controls">
        <li><button data-let=${id} class="add-to-cart">Add to Cart</button></li>
        <li><button class="checkout">CheckOut</button></li>
      </ul>
      <div class="description">
        <h3>Description</h3>
        <p>
        ${long}
        </p>
      </div>
      <footer>
        <ul class="meta"></ul>
          <li>likes:<span>${meta.rating}</span></li>
          <li>views:<span>${meta.views}</span></li>
          <li> reviews: <span>${meta.reviews}</span></li>
        </ul>
      </footer>
      </div>
    </section>
    `;
    return template;
  }
  function sizeFormatter(sizes) {
    let markUp = `
  
  <ul class="sizes">`;
    sizes.forEach((sizes) => {
      markUp += `<li class="sizes">${sizes}</li>`;
    });
    markUp += `</ul>`;
    return markUp;
  }
})();

// (function () {
//   console.log(localStorage.getItem("key"));
// })();

// section class="product">
// <header>
//    <h2>${name}</h2>
//       <p>${price}</p>
// </header>
// <p>${long}</p>
// <footer>
// <ul>
// <li><button>add to cart</button></li>
// <li><button>checkout</button></li>
// </ul>
// </footer>
// </section>
// <
