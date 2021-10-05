function main(r) {
    r.subrequest('/proxy/contacts.html', {method: "GET"}, res => {
        r.headersOut['Content-Type'] = "text/html; charset=utf-8";
        r.return(res.status, res.responseBody);
    })
}

export default {main};
