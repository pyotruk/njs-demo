FROM dockette/nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./workers/* /etc/nginx/
