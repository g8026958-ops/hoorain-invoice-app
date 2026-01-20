let items = JSON.parse(localStorage.getItem("items")) || [];

function render() {
  list.innerHTML = "";
  items.forEach((i, index) => {
    list.innerHTML += `
      <li>
        ${i.name} — ${i.price} x ${i.qty}
        <button onclick="removeItem(${index})">❌</button>
      </li>`;
  });
}

function add() {
  let nameVal = name.value;
  let priceVal = Number(price.value);
  let qtyVal = Number(qty.value);

  items.push({ name: nameVal, price: priceVal, qty: qtyVal });
  localStorage.setItem("items", JSON.stringify(items));

  name.value = price.value = qty.value = "";
  render();
}

function removeItem(i) {
  items.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(items));
  render();
}

render();
