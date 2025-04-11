const modal = document.getElementById("addProductModal");
const btn = document.getElementById("addProductBtn");
const span = document.getElementById("closeModalBtn");
const form = document.getElementById("addProductForm");

// Hiển thị dialog khi nhấn nút
btn.onclick = function () {
  modal.style.display = "block";
};

// Đóng dialog khi nhấn nút "x"
span.onclick = function () {
  modal.style.display = "none";
};

// Đóng dialog khi nhấn ra ngoài dialog
window.onclick = function (event) {
  if (event.target === modal) {
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
                        <i class="fa-solid fa-trash-can" style="cursor: pointer;" onclick="deleteProduct('${
                          product.id
                        }')"></i>
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

initPage();
