let items=[];
function add(){
let n=name.value,p=price.value,q=qty.value;
items.push({n,p,q});
list.innerHTML+=`<li>${n} - ${p} x ${q}</li>`;
localStorage.setItem("items",JSON.stringify(items));
}
