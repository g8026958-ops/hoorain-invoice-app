let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

function addProduct() {
  let name = document.getElementById("pname").value;
  let price = document.getElementById("pprice").value;
  let qty = document.getElementById("pqty").value;

  if (!name || !price || !qty) {
    alert("Fill all fields");
    return;
  }

  products.push({ name, price, qty });
  saveProducts();
  displayProducts();

  document.getElementById("pname").value = "";
  document.getElementById("pprice").value = "";
  document.getElementById("pqty").value = "";
}

function deleteProduct(index) {
  products.splice(index, 1);
  saveProducts();
  displayProducts();
}

function displayProducts() {
  let table = document.getElementById("productTable");
  if (!table) return;

  table.innerHTML = "";
  products.forEach((p, i) => {
    table.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>${p.price}</td>
        <td>${p.qty}</td>
        <td><button onclick="deleteProduct(${i})">Delete</button></td>
      </tr>
    `;
  });
}

displayProducts();
let cart = [];

function loadProductsForSale() {
  let select = document.getElementById("productSelect");
  if (!select) return;

  select.innerHTML = "";
  products.forEach((p, i) => {
    select.innerHTML += `<option value="${i}">${p.name} - Rs ${p.price}</option>`;
  });
}

function addToCart() {
  let index = document.getElementById("productSelect").value;
  let qty = document.getElementById("saleQty").value;

  if (!qty) {
    alert("Enter quantity");
    return;
  }

  let product = products[index];
  cart.push({
    name: product.name,
    price: product.price,
    qty: qty,
    total: product.price * qty
  });

  displayInvoice();
}

function displayInvoice() {
  let table = document.getElementById("invoiceTable");
  if (!table) return;

  let total = 0;
  table.innerHTML = "";

  cart.forEach(item => {
    total += item.total;
    table.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.qty}</td>
        <td>${item.total}</td>
      </tr>
    `;
  });

  document.getElementById("grandTotal").innerText =
    "Total: Rs " + total;
}

function printInvoice() {
  window.print();
}

loadProductsForSale();
