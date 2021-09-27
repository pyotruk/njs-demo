FROM dockette/nginx

COPY . /usr/src/application
WORKDIR /usr/src/application

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./worker.js /etc/nginx/worker.js
