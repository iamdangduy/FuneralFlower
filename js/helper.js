document.addEventListener('contextmenu', function (event) {
  event.preventDefault(); // Ngăn chặn menu chuột phải
});

const isDebug = false; // false

const Enum = {
  URL: {
    API: isDebug ? "https://localhost:7081/api/" : "https://api.hoatuoibaonam.com/api/",
    IMG: isDebug ? "https://localhost:7081/" : "https://api.hoatuoibaonam.com/",
  },
};

var GetShareImage = function (imageUrl) {
  try {
    return Enum.URL.IMG + imageUrl;
  } catch (error) {
    console.log(error);
  }
};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

var SendGetRequest = async function (url) {
  try {
    let headers = {};
    headers["Content-Type"] = "application/json";

    let rq = await fetch(Enum.URL.API + url, {
      method: "get",
      headers: headers,
    });
    let rs = await rq.json();
    return rs;
  } catch (ex) {
    console.log(ex);
  }
  return null;
};

var SendPostRequest = async function (url, obj) {
  try {
    let headers = {};
    headers["Content-Type"] = "application/json";

    let rq = await fetch(Enum.URL.API + url, {
      method: "post",
      headers: headers,
      body: JSON.stringify(obj),
    });
    let rs = await rq.json();
    return rs;
  } catch (ex) {
    console.log(ex);
  }
  return null;
};
