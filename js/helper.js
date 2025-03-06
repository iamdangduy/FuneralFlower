const isDebug = true; // false

const Enum = {
    URL : {
        API : isDebug ? 'https://localhost:7132/api/' : 'https://xyz.com/api/'
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