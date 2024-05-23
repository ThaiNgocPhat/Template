const image = document.getElementById("image");
const quantity = document.getElementById("quantity");
const fullname = document.getElementById("fullname");
const description = document.getElementById("description");
const price = document.getElementById("price");
let products = JSON.parse(localStorage.getItem("products")) || [];
console.log(JSON.parse(localStorage.getItem("products")));
let tbody = document.getElementById("tbody1");
function displayData() {
  let html = "";
  for (let i in products) {
    html += ` 
    <tr> 
      <td>${i}</td>
      <td><img class="img-product" src="${products[i].image}" alt="" /></td>
      <td>${products[i].quantity}</td>
      <td>${products[i].fullname}</td>
      <td>${products[i].description}</td>
      <td>${products[i].price}</td>
      <td><button onclick="editProduct('${products[i].id}')">Edit</button>
      <button onclick="deleteProduct('${products[i].id}')">Delete</button></td>
    </tr>  
    `;
    
  }
  tbody.innerHTML = html;
}
// Edit sản phẩm:
function editProduct(productID) {
  console.log(productID, "ID");
  localStorage.setItem("productID", productID);
  document.getElementById("add").style.display = "none";
  document.getElementById("save").style.display = "block";
  let index = products.findIndex((product) => product.id == productID);
    console.log(products[index]);
    fullname.value = products[index].fullname;
    quantity.value = products[index].quantity;
    price.value = products[index].price;
    image.value = products[index].image;
    description.value = products[index].description;
    displayData();
    document.getElementById("product-info-table").style.display = "block";
}


// Save sản phẩm:
function saveProduct() {
  document.getElementById("add").style.display = "block";
  document.getElementById("save").style.display = "none";
  let productID = localStorage.getItem("productID"); // Lấy productID từ localStorage
  let index = products.findIndex((product) => product.id == productID);
  if (index !== -1) {
    products[index].fullname = fullname.value;
    products[index].quantity = quantity.value;
    products[index].price = price.value;
    products[index].image = image.value;
    products[index].description = description.value;
    localStorage.setItem("products", JSON.stringify(products));
    displayData();
    FuiToast.success('Save product successfully.')
    document.getElementById("product-info-table").style.display = "none";
  } else {
    FuiToast.error("Save product failed")
  }
  fullname.value = '';
  quantity.value = '';
  price.value = '';
  image.value = '';
  description.value = '';
  document.getElementById("product-info-table").style.display = "none";
  localStorage.removeItem("productID");
}


// Delete sản phẩm:
function deleteProduct(productID) {
  console.log(productID);
  const index = products.findIndex((student) => student.id == productID);
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayData();
  FuiToast.success('Delete product successfully.')
  console.log(index);
}

displayData();

// Thêm sản phẩm
function addProduct() {
  const newProduct = {
    id: Math.floor(Math.random() * 1000),
    fullname: fullname.value,
    quantity: quantity.value,
    price: price.value,
    image: image.value,
    description: description.value
  };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
  displayData();
  FuiToast.success('Add product successfully.')
  fullname.value = '';
  quantity.value = '';
  price.value = '';
  image.value = '';
  description.value = '';
  document.getElementById("product-info-table").style.display = "none";
}


// Hiển thị form thêm sản phẩm
function displayAddProduct() {
  document.getElementById("product-info-table").style.display = "block";
}

// Đóng form thêm sản phẩm
function closeAddProduct(){
  document.getElementById("product-info-table").style.display = "none";
  document.getElementById("add-button").textContent = "+Add Product";
}


//sắp xếp các phàn tử theo a-z
function sortProduct(){
  products.sort(function(a,b){
    return a.fullname.localeCompare(b.fullname);
  });
  displayData();
}
//tìm kiếm sản phẩm
function handleSearch() {
  let search = document.getElementById("search").value.toLowerCase();
  let result = products.filter((product) => {
    return product.fullname.toLowerCase().includes(search);
  });

  let html = "";
  for (let i = 0; i < result.length; i++) {
    html += `
      <tr>
        <td>${i}</td>
        <td><img class="img-product" src="${result[i].image}" alt="" /></td>
        <td>${result[i].quantity}</td>
        <td>${result[i].fullname}</td>
        <td>${result[i].price}</td>
        <td><button onclick="editProduct('${result[i].id}')">Edit</button>
        <button onclick="deleteProduct('${result[i].id}')">Delete</button></td>
      </tr>  
    `;
  }
  
  tbody.innerHTML = html;
  
  if (search === "") {
    displayData();
  }
}
