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
