//tìm kiếm sản ohaamr phù hợp với từ khóa
const searchInput = document.querySelector('searchInput');
searchInput.addEventListener('keyup', function (e) {
    const keyword = e.target.value;
    const filteredProducts = products.filter(function (product) {
        return product.name.includes(keyword);
    });
    renderProducts(filteredProducts);
});