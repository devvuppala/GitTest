FROM nginx:alpine

LABEL author="Chandrashekar Vedire"

WORKDIR /usr/share/nginx/html


COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist .

EXPOSE 80 443
ENTRYPOINT ["nginx","-g","daemon off;"]