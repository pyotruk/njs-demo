FROM dockette/nginx

COPY ./ssl/localhost.crt /etc/ssl/certs/localhost.crt
COPY ./ssl/localhost.key /etc/ssl/private/localhost.key

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./workers.nginx.conf /etc/nginx/user.conf.d/workers.nginx.conf
COPY ./workers/* /etc/nginx/
