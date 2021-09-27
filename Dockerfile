FROM ubuntu

COPY . /usr/src/application
WORKDIR /usr/src/application

RUN apt-get update && \
      apt-get -y install sudo

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

USER docker
CMD /bin/bash

CMD chmod o+x ./nginx-install.sh
CMD sudo ./nginx-install.sh
#RUN apt-get update
#RUN apt-get install nginx-module-njs

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
