fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    let container = document.getElementById("container");
    let product = "";
    for (let i = 0; i < products.length; i++) {
      product += `
      <div class="product">
      <h2>${products[i].category}</h2>
      <img src="${products[i].image}" class="image" >
      <p>${products[i].description}
      <br>
      <span>${products[i].price}
      </div>
      `;
    }
    console.log(products);
    container.innerHTML = product;
  });
