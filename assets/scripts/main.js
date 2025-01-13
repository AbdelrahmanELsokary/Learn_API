fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    let container = document.getElementById("container");
    let product = "";
    for (let i = 0; i < products.length; i++) {
      product += `
      <img src="${products[i].image}" >
      `;
    }
    container.innerHTML = product;
  });
