const isDebug = true; // false

const Enum = {
    URL: {
        API: isDebug ? 'https://localhost:7081/api/' : 'https://xyz.com/api/',
        IMG: isDebug ? 'https://localhost:7081/' : 'https://xyz.com/api/'
    }
}

var GetShareImage = function (imageUrl) {
    try {
        return Enum.URL.IMG + imageUrl;
    } catch (error) {
        console.log(error);
    }
}

var SendGetRequest = async function (url) {
    try {
        let headers = {};
        headers["Content-Type"] = 'application/json';

        let rq = await fetch(Enum.URL.API + url, { method: 'get', headers: headers });
        let rs = await rq.json();
        return rs;
    }
    catch (ex) { console.log(ex); }
    return null;
}

var SendPostRequest = async function (url, obj) {
    try {
        let headers = {};
        headers["Content-Type"] = 'application/json';

        let rq = await fetch(Enum.URL.API + url, { method: 'post', headers: headers, body: JSON.stringify(obj) });
        let rs = await rq.json();
        return rs;
    }
    catch (ex) { console.log(ex); }
    return null;
}