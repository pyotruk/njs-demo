FROM dockette/nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./workers.nginx.conf /etc/nginx/user.conf.d/workers.nginx.conf
COPY ./workers/* /etc/nginx/
