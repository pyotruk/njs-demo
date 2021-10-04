var fs = require('fs').promises;

function main(r) {
    fs.readFile("/etc/nginx/TEST_CONFIG.json").then((json) => {
        r.return(200, json);
    });
}

export default {main};
