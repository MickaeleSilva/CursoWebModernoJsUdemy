const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  },
};

const products = {};

function saveProduct(product) {
  if (!product.id) product.id = sequence.id;
  products[product.id] = product;
  return product;
}

// returning a product by it's id
function getProduct(id) {
  return products[id] || {};
}

//returning all products
function getProducts() {
  return Object.values(products);
}

//delete products
function deleteProduct(id) {
  const produto = products[id] || {};
  delete products[id]; // remove a chave do objeto
  return produto;
}

module.exports = { saveProduct, getProduct, getProducts, deleteProduct };
