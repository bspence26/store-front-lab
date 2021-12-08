(function () {
  // Checking to see if a product has been clicked
  // If product isnt click- user goes back to index( we need data to build page- no data no page)
  if (!localStorage.getItem("product")) {
    console.log("doesnt exist");
    window.location.assign("index.html");
  }
  // Data from the store fron\/
  const product = JSON.parse(localStorage.getItem("product"));
  const cartItems = JSON.parse(localStorage.getItem("cart"));
  //  step1- update cart count
  const markUp = renderProductPage(product);

  document.querySelector("main").append(markUp);

  // Update cartcount
  function updateCartCount() {
    // always grabbing from local storage
    document.querySelector("#cartCount").textContent = cartItems.length;
  }
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
   ${sizeFormatter(sizes)}
    
      <div class="quantity">quantity</div>
      <ul class="controls">
        <li><button id="addToCart" data-key=${id} class="add-to-cart">Add to Cart</button></li>
        <li><button id="checkOut" class="checkout">CheckOut</button></li>
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
    const element = document.createRange().createContextualFragment(template)
      .children[0];
    // query element
    element
      .querySelector(".add-to-cart")
      .addEventListener("click", onAddToCart);
    return element;
  }
  //   add to cart function
  function onAddToCart(e) {
    const cartObject = {
      id: e.currentTarget.dataset.key,
      quantity: 1,
    };
    cartItems.push(cartObject);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCartCount();
  }
  function sizeFormatter(sizes) {
    let markUp = `
  
  <ul class="sizeList">`;
    sizes.forEach((sizes) => {
      markUp += `<li class="sizes">${sizes}</li>`;
    });
    markUp += `</ul>`;
    return markUp;
  }
})();
// const cart = JSON.parse(localStorage.getItem('cart'))
// const obj={
//   id=2,
//   quantity=1,
// }
// cart.push(obj)

// localStorage.setItem('cart',JSON.stringify(cart))
// create template
