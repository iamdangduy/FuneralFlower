function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
}

const initPage = async function () {
  const rs = await SendGetRequest(`Product/GetListProduct`);
  if (rs.status == "success") {
    const tbody = $(".product-brand-content");
    tbody.empty(); // Xóa nội dung cũ

    rs.data.forEach((product) => {
      const row = `
                  <a
                  href="/Areas/ProductDetail/Views/index.html?id=${product.id}"
                  class="product-brand-item"
                >
                  <div class="product-item-image">
                    <img
                      src="${GetShareImage(product.productImageUrl)}"
                      alt=""
                    />
                  </div>
                  <div class="product-item-name">
                  ${product.productName}
                  </div>
                  <div class="product-item-price">${formatCurrency(product.productNewPrice)
        }</div> 
                  <div class="product-button-buy">
                <i class="fa-solid fa-cart-arrow-down" style="margin-right: 10px"></i>Mua qua Zalo
              </div>
              </a>`;
      tbody.append(row);
    });
  }
};

const redirectToZalo = function () {
  console.log(1);

}

initPage();
