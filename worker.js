function hello(r) {
    // r.return(200, `http://${r.args.url}`);

    r.return(200, JSON.stringify({
        version: njs.version,
        nginxVersion: r.variables.nginx_version
    }));

    // r.subrequest(`http://rwandanrecords.com/`, {method: 'GET'}, (res) => {
    //     r.return(res.status, res.responseBody);
    // }, (err) => {
    //     r.return(501, JSON.stringify(err));
    // });

    // njx.fetch(`http://rwandanrecords.com/`)
    //     .then(reply => reply.text())
    //     .then(body => r.return(200, body))
    //     .catch(e => r.return(501, e.message));
}

export default {hello};
