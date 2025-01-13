fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    let container = document.getElementById("container");
    let product = "";
    for (let i = 0; i < products.length; i++) {
      product += `
      <div>
      <h2>${products[i].category}</h2>
      <img src="${products[i].image}" class="image" >
      <p>${products[i].description}
      </div>
      `;
    }
    console.log(products);
    container.innerHTML = product;
  });
