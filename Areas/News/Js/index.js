const initPage = async function () {
    const rs = await SendGetRequest(`News/GetListNews`);
    if (rs.status == "success") {
        const tbody = $(".content-mid");
        tbody.empty(); // Xóa nội dung cũ
        console.log(rs.data);

        rs.data.forEach((product) => {
            const row = `
                <div class="news-item">
                <a
                  href="/Areas/News/Views/newsDetail.html?id=${product.id}"
                  class="product-brand-item"
                >
                    <div class="news-image">
              <img
                src="${GetShareImage(product.titleImageUrl)}"
                alt=""
              />
            </div>
            <div class="news-header">${product.title}</div>
            <div class="news-content">
              ${product.newsContent}
            </div>
            <a/>
          </div>
            `;
            tbody.append(row);
        });
    }
};

initPage();