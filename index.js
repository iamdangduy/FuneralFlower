document.addEventListener('contextmenu', function (event) {
  event.preventDefault(); // Ngăn chặn menu chuột phải
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

const initPage = async function () {
  const rs = await SendGetRequest(`Product/GetListPreviewProduct`);
  if (rs.status == "success") {
    const tbody = $(".product-brand-content");
    tbody.empty(); // Xóa nội dung cũ
    rs.data.forEach((product) => {
      const row = `
                  <a href="/Areas/ProductDetail/Views/index.html?id=${product.id
        }" class="product-brand-item">
                    <div class="product-item-image">
                        <img src="${GetShareImage(
          product.productImageUrl
        )}" alt="" />
                    </div>
                    <div class="product-item-name">
                    ${product.productName}
                    </div>
                    <div class="product-item-price">${formatCurrency(
          product.productNewPrice
        )}</div>
                    <div class="product-button-buy">
                        <i class="fa-solid fa-cart-arrow-down" style="margin-right: 10px; color: black;"></i>Mua qua Zalo
                    </div>
                    </a>
              `;
      tbody.append(row);
    });
  }
};

initPage();
