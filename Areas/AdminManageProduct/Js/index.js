const modal = document.getElementById("addProductModal");
const modalEdit = document.getElementById("editProductModal");
const btn = document.getElementById("addProductBtn");
const span = document.getElementById("closeModalBtn");
const spanEdit = document.getElementById("closeModalEditBtn");
const form = document.getElementById("addProductForm");

// Hiển thị dialog khi nhấn nút
btn.onclick = function () {
  modal.style.display = "block";
  $(".preview").css(
    "background-image",
    'url("https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg")'
  );
};

// Đóng dialog khi nhấn nút "x"
spanEdit.onclick = function () {
  modalEdit.style.display = "none";
};

// Đóng dialog khi nhấn nút "x"
span.onclick = function () {
  modal.style.display = "none";
};

// Đóng dialog khi nhấn ra ngoài dialog
window.onclick = function (event) {
  if (event.target === modal || event.target === modalEdit) {
    modal.style.display = "none";
  }
};

var AddImage = function (el) {
  $(el).siblings("input[type=file]").click();
};

var AddImage_OnChange = function (el) {
  var files = el.files;

  var reader = new FileReader();

  reader.onloadend = function (event) {
    var imageDataUrl = event.currentTarget.result;
    var imageData = event.currentTarget.result.substring(
      event.currentTarget.result.indexOf(",") + 1,
      event.currentTarget.result.length
    );
    //dữ liệu chuẩn base64
    $(el)
      .siblings("input[type=hidden]")
      .val(
        event.currentTarget.result.substring(
          event.currentTarget.result.indexOf(",") + 1,
          event.currentTarget.result.length
        )
      );

    //hiển thị preview
    $(el)
      .siblings(".preview")
      .css("background-image", `url(${event.currentTarget.result})`);
  };
  reader.readAsDataURL(files[0]);

  $(el).val("");
};

document
  .getElementById("insertProduct")
  .addEventListener("click", async function () {
    checkCookie();

    let nameProduct = $("#productName").val();
    let productOldPrice = $("#productOldPrice").val();
    let productNewPrice = $("#productNewPrice").val();
    let description = $("#description").val();
    let valueImage = $("#valueImage").val();

    let reqData = {
      ProductName: nameProduct,
      ProductOldPrice: productOldPrice,
      ProductNewPrice: productNewPrice,
      Description: description,
      ProductImageUrl: valueImage,
    };

    const rs = await SendPostRequest(`Product/InsertProduct`, reqData);

    if (rs.status == "success") {
      alert("Thêm sản phẩm thành công!");
      modal.style.display = "none";
      // Reset các trường về rỗng
      $("#productName").val("");
      $("#productOldPrice").val("");
      $("#productNewPrice").val("");
      $("#description").val("");
      $("#valueImage").val("");
      $(".preview").css(
        "background-image",
        'url("https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg")'
      );
      initPage();
    }
  });

const initPage = async function () {
  const rs = await SendGetRequest(`Product/GetListProduct`);
  if (rs.status == "success") {
    const tbody = $("#productTableBody");
    tbody.empty(); // Xóa nội dung cũ

    rs.data.forEach((product) => {
      const row = `
                <tr>
                    <td>
                        <i class="fa-solid fa-trash-can" style="cursor: pointer;" onclick="deleteProduct('${product.id}')"></i>
                        <i class="fa-solid fa-pen-to-square" style="cursor: pointer;" onclick="openEditModal('${product.id}')"></i>
                    </td>
                    <td>${product.productName}</td>
                    <td>${product.productOldPrice}</td>
                    <td>${product.productNewPrice}</td>
                    <td><div class="preview"
                    style="background-image: url('${GetShareImage(
        product.productImageUrl
      )}');"></div></td>
                    <td>${product.description}</td>
                </tr>
            `;
      tbody.append(row);
    });
  }
};

const deleteProduct = async function (id) {
  checkCookie();
  // Xác nhận trước khi xóa
  if (!confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
    return;
  }

  const rs = await SendGetRequest(`Product/DeleteProduct?Id=${id}`);
  if (rs.status == "success") {
    alert("Xóa thành công!");
    initPage();
  }
};

const checkCookie = async function () {
  var cookie = getCookie("user_cookie");
  if (!cookie) {
    window.location.href = "/Areas/Login/Views/index.html";
  }

  const rs = await SendGetRequest(
    `UserToken/CheckUserByCookie?cookie=` + cookie
  );
  if (rs.status != "success") {
    window.location.href = "/Areas/Login/Views/index.html";
  }
};

function formatNumber(input) {
  // Xóa tất cả ký tự không phải số và định dạng lại
  let value = input.value.replace(/\D/g, '');

  // Chia giá trị thành từng nhóm 3 chữ số và thêm dấu phẩy
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Cập nhật giá trị vào input
  input.value = value;
}

initPage();
