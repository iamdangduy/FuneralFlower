const modal = document.getElementById("addProductModal");
const btn = document.getElementById("addProductBtn");
const span = document.getElementById("closeModalBtn");
const form = document.getElementById("addProductForm");

// Hiển thị dialog khi nhấn nút
btn.onclick = function () {
    modal.style.display = "block";
}

// Đóng dialog khi nhấn nút "x"
span.onclick = function () {
    modal.style.display = "none";
}

// Đóng dialog khi nhấn ra ngoài dialog
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

var AddImage = function (el) { $(el).siblings('input[type=file]').click(); }

var AddImage_OnChange = function (el) {
    var files = el.files;

    var reader = new FileReader();

    reader.onloadend = function (event) {
        var imageDataUrl = event.currentTarget.result;
        var imageData = event.currentTarget.result.substring(event.currentTarget.result.indexOf(',') + 1, event.currentTarget.result.length);
        //dữ liệu chuẩn base64
        $(el).siblings('input[type=hidden]').val(event.currentTarget.result.substring(event.currentTarget.result.indexOf(',') + 1, event.currentTarget.result.length));

        //hiển thị preview
        $(el).siblings('.preview').css('background-image', `url(${event.currentTarget.result})`);

    };
    reader.readAsDataURL(files[0]);

    $(el).val('');
}

document.getElementById('insertProduct').addEventListener('click', async function () {
    let nameProduct = $('#productName').val();
    let productOldPrice = $('#productOldPrice').val();
    let productNewPrice = $('#productNewPrice').val();
    let description = $('#description').val();
    let valueImage = $('#valueImage').val();
    
    let reqData = {
        ProductName: nameProduct,
        ProductImageUrl: valueImage
    };

    console.log(1);
    const rs = await SendPostRequest(`Product/InsertProduct`, reqData);

    if (rs.status == 'success') {
        if (rs.data.token) {
            $scope.setCookie('user_cookie', rs.data.token);
            window.location.href = "/Areas/AdminManageProduct/Views/index.html";
        }
    }
});

