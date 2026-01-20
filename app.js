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
