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

const initPage = async function () {
  const rs = await SendGetRequest(`Product/GetListPreviewProduct`);
  if (rs.status == "success") {
    const tbody = $(".product-brand-content");
    tbody.empty(); // Xóa nội dung cũ

    rs.data.forEach((product) => {
      const row = `
                  <a href="/Areas/ProductDetail/Views/index.html" class="product-brand-item">
                    <div class="product-item-image">
                        <img src="${GetShareImage(
                          product.productImageUrl
                        )}" alt="" />
                    </div>
                    <div class="product-item-name">
                    ${product.productName}
                    </div>
                    <div class="product-item-price">${
                      product.productNewPrice
                    }</div>
                    <div class="product-button-buy">
                        <i class="fa-solid fa-cart-arrow-down" style="margin-right: 10px"></i>Mua qua Zalo
                    </div>
                    </a>
              `;
      tbody.append(row);
    });
  }
};

initPage();
