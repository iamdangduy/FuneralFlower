// Hàm để lấy giá trị query string
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Lấy id từ query string
const productId = getQueryParam('id');


const initPage = async function () {
    const rs = await SendGetRequest(`Product/GetProductById?Id=${productId}`);
    if (rs.status == "success") {
        const tbody = $(".content-mid-container");
        tbody.empty(); // Xóa nội dung cũ

        const row = `
                    <div class="content-mid-left">
              <div class="image-product-detail">
                <img src="${GetShareImage(rs.data.productImageUrl)}" alt="" />
              </div>
            </div>
            <div class="content-mid-right">
              <div class="product-name">
              ${rs.data.productName}
              </div>
              <div class="product-feedback-star">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#FDD835"
                      fill-rule="evenodd"
                      stroke="#FFB500"
                      stroke-width="1.5"
                      d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"
                    ></path>
                  </svg> </span
                ><span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#FDD835"
                      fill-rule="evenodd"
                      stroke="#FFB500"
                      stroke-width="1.5"
                      d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"
                    ></path>
                  </svg> </span
                ><span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#FDD835"
                      fill-rule="evenodd"
                      stroke="#FFB500"
                      stroke-width="1.5"
                      d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"
                    ></path>
                  </svg> </span
                ><span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#FDD835"
                      fill-rule="evenodd"
                      stroke="#FFB500"
                      stroke-width="1.5"
                      d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"
                    ></path>
                  </svg> </span
                ><span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="none"
                      fill-rule="evenodd"
                      stroke="#FFB500"
                      stroke-width="1.5"
                      d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"
                    ></path>
                  </svg>
                </span>
                <span
                  style="font-size: 16px; cursor: pointer; letter-spacing: 0px"
                  >( <b>11</b> đánh giá )</span
                >
              </div>
              <div class="product-price">${rs.data.productNewPrice} VND</div>
              <div class="product-description">
                <div class="woocommerce-product-details__short-description">
                  <h3>
                    <em>${rs.data.productName} còn có ý nghĩa gì?</em>
                  </h3>
                  <p>
                    <em>${rs.data.description}.</em>
                  </p>
                </div>
                <div class="product-contact-order">
                  <div style="width: 200px">
                    <a
                      href="https://zalo.me/84333133942"
                      target="_blank"
                      style="text-decoration: none"
                    >
                      <div
                        class="product-contact-order-zalo"
                        style="margin-bottom: 20px"
                      >
                        <b>
                          <i
                            class="fa-solid fa-cart-shopping"
                            style="margin-right: 10px"
                          >
                          </i
                          >Đặt hoa qua Zalo
                        </b>
                      </div>
                    </a>
                  </div>
                  <div
                    class="product-contact-order-title"
                    style="margin-bottom: 20px"
                  >
                    Hotline đặt hàng (24/7):
                  </div>

                  <div
                    class="product-contact-order-phone"
                    style="margin-bottom: 20px"
                  >
                    Hà Nội:
                    <b
                      ><a
                        href="https://zalo.me/84333133942"
                        target="_blank"
                        style="color: rgb(235, 178, 62); text-decoration: none"
                        >02466818088 - 0983698184</a
                      ></b
                    >
                  </div>
                </div>
                <div class="benefit-order-customer">
                  <span style="margin-bottom: 10px"
                    ><b>QUYỀN LỢI MUA HÀNG</b></span
                  >
                  <span style="margin-bottom: 5px"
                    ><i>1. Có thể giao hoa gấp trong 30 phút-2h.</i></span
                  >
                  <span style="margin-bottom: 5px"
                    ><i>2. Miễn phí thiệp, băng rôn chúc mừng.</i></span
                  >
                  <span style="margin-bottom: 5px"
                    ><i
                      >3. Miễn phí vận chuyển hoa trong nội thành 63 TP.</i
                    ></span
                  >
                  <span style="margin-bottom: 5px"
                    ><i>4. Có hóa đơn đỏ trực tiếp.</i></span
                  >
                  <span style="margin-bottom: 5px"
                    ><i>5. Được kiểm tra hàng trước khi thanh toán.</i></span
                  >
                  <span style="margin-bottom: 5px"
                    ><i>6. Tư vấn có tâm và chính xác.</i></span
                  >
                </div>
              </div>
            </div>
        `;
        tbody.append(row);
    }
}

initPage();