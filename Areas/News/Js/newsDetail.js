// Hàm để lấy giá trị query string
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Lấy id từ query string
const productId = getQueryParam('id');

const initPage = async function () {
    const rs = await SendGetRequest(`News/GetNewsById?Id=${productId}`);
    if (rs.status == "success") {
        const tbody = $(".content-mid");
        tbody.empty(); // Xóa nội dung cũ

        const row = `
                <div class="news-header">
                    <h1>${rs.data.title}</h1>
                </div>
                <div class="image-news">
                    <img src="${GetShareImage(rs.data.titleImageUrl)}" alt="">
                </div>
                <div class="image-content">${rs.data.newsContent}</div>
        `;
        tbody.append(row);
    }
};

initPage();
