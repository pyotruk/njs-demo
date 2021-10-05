var fs = require('fs').promises;

function main(r) {
    fs.readFile("/etc/nginx/TEST_CONFIG.json").then((json) => {
        r.headersOut['Content-Type'] = "application/json; charset=utf-8";
        r.return(200, json);
    });
}

export default {main};
