(function () {
  // fetch data
  let store;
  // const cartItems = [{ id: 1, quantity: 0 }];
  // document.querySelector("#cartCount").textContent = cartItems.length;
  // localStorage / setItem("cart", JSON.stringify(cartItems));

  if (!localStorage.getItem("cart")) {
    const temp = [];
    console.log("create cart");
    localStorage.setItem("cart", JSON.stringify(temp));
  }
  document.querySelector("#cartCount").textContent = JSON.parse(
    localStorage.getItem("cart")
  ).length;

  fetch("./data/shoes.json")
    .then((res) => res.json())
    .then((data) => {
      store = [...data];
      const productElements = renderProducts(data);
      const products = addProductControls(productElements);
      const main = document.createElement("main");
      products.forEach((product) => {
        //layout thrashing
        //document.body.appendChild(product)
        main.append(product);
      });
      document.querySelector("header").appendChild(main);
    });

  function renderProducts(products) {
    const elements = products.map((product) => {
      const { id, name, thumbnail, price } = product;
      const template = `
            <aside class="product" data-key="${id}">
                <div class="image">
                    <img src="assets/shoes/${name.toLowerCase()}/${thumbnail}" alt="${name} shoes by jim hortons" />
                </div>
                <header class="name">
                    <h2>${name}</h2>
                </header>
                <p class="price">$${price / 100}</p>
            </aside>
            `;
      return document.createRange().createContextualFragment(template)
        .children[0];
    });
    return elements;
  }

  // Click Event Listener PRODUCT

  function onViewProductDetails(e) {
    // id of an item that is clicked
    const key = Number(e.currentTarget.dataset.key);
    const productData = store.find((product) => product.id === key);
    // set local storage
    localStorage.setItem("product", JSON.stringify(productData));
    // // location navigate to the product page
    window.location.assign("product.html");
  }
  // JSON.Parse(takes JSON object- converts to JS obejct)
  // JSON.Stringify(takes js object into JSON object)
  function addProductControls(products) {
    const elements = products.map((product) => {
      product.addEventListener("click", onViewProductDetails);
      return product;
    });
    return elements;
  }
})();

// when clicking on the delete buttons on newly creating table rows
// the icon does not seem to be recognize being touched

// need to finish: timer, row deleter, adjusting debits and credits when rows are deleted
