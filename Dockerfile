RUN ng build --prod 
FROM nginx:alpine

LABEL author="Dev Vuppala"

WORKDIR /usr/share/nginx/html


COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist .

EXPOSE 80 443
ENTRYPOINT ["nginx","-g","daemon off;"]
