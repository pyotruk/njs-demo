function main(r) {
    r.return(200, JSON.stringify({
        njsModuleVersion: njs.version,
        nginxVersion: r.variables.nginx_version
    }));
}

export default {main};
