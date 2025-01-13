fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    let container = document.getElementById("container");
    let product = "";
    for (let i = 0; i < products.length; i++) {
      product += `
      <img class = "image" src="${products[i].image}" >
      `;
    }
    console.log(products);
    container.innerHTML = product;
  });
