
const openEditModal = async function (id) {
    checkCookie();
    modalEdit.style.display = "block";
    const rs = await SendGetRequest(`Product/GetProductById?Id=${id}`);
    console.log(rs.data);
    $("#productNameEdit").val(rs.data.productName);
    $("#productOldPriceEdit").val(rs.data.productOldPrice);
    $("#productNewPriceEdit").val(rs.data.productNewPrice);
    $("#descriptionEdit").val(rs.data.description);
    $("#valueImageEdit").val(rs.data.ProductImageUrl);
    $(".preview").css(
        "background-image",
        `url("${GetShareImage(rs.data.productImageUrl)}")`
    );
    $('#updateProductBtn').attr('data-id', rs.data.id);
};

const updateProduct = async function (button) {
    const productId = button.getAttribute('data-id');
    let nameProduct = $("#productNameEdit").val();
    let productOldPrice = $("#productOldPriceEdit").val();
    let productNewPrice = $("#productNewPriceEdit").val();
    let description = $("#descriptionEdit").val();
    let valueImage = $("#valueImageEdit").val();
    let reqData = {
        Id: productId,
        ProductName: nameProduct,
        ProductOldPrice: productOldPrice,
        ProductNewPrice: productNewPrice,
        Description: description,
        ProductImageUrl: valueImage,
    };

    console.log(reqData);

    const rs = await SendPostRequest(`Product/UpdateProduct`, reqData);
    if (rs.status == "success") {
        alert("Sửa sản phẩm thành công!");
        modalEdit.style.display = "none";
        initPage();
    }
    else {
        alert(rs.message);
    }

}