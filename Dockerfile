#FROM node:14
#COPY ./ /app
#WORKDIR /app
#RUN npm install && npm run build

FROM nginx
RUN mkdir /app
COPY ./dist /app
#COPY --from=0  /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

